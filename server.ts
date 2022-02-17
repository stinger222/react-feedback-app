const Feedbacks = require('./src/models/Feedbacks')
const cookieParser = require('cookie-parser') 
const User = require('./src/models/User')
const express = require('express')
const config = require('config')
const bcrypt = require('bcrypt')
const cors = require('cors')

const app = express()

const successResponse = (code = 200, message, res) => {
	res.statusCode = code
	res.json({
		errorCode: 0,
		message
	})
	return res
}	

const errorResponse = (code = 400, message, res) => {
	res.statusCode = code
	res.json({
		errorCode: 1,
		message: message
	})
} 

app.use(cookieParser())
app.use(express.json())
app.use(cors({
	origin: config.get('client-origin'),
	credentials: true
}))

// Getting user feedbacks
app.get('/api/user/:user_id', (req, res) => {
	Feedbacks.findAll({
		where: {
			user_id: req.params.user_id
		}
	}).then(feedbacks => {
		res.statusCode = 200
		res.send(feedbacks)
	}).catch(err => errorResponse(400, err.message, res))
})

// Edit feedback
app.put('/api/feedback/:feedback_id', (req, res) => {
	const {text, rating} = req.body
	Feedbacks.update({
		text,
		rating,
	}, {
		where: {
			id: req.params.feedback_id
		}
	}).then(() => successResponse(200, 'Feedback updated successfully', res))
		.catch(err => errorResponse(400, err.message, res))
})

// Post new feedback
app.post('/api/feedback', (req, res) => {
	const {text, rating} = req.body
	Feedbacks.create({
		user_id: 1,
		rating,
		text
	}).then(() => successResponse(201, 'Feedback created', res))
		.catch(err => errorResponse(400, err.message, res))
})

// Delete feedback
app.delete('/api/feedback/:feedback_id', (req, res) => {
	Feedbacks.destroy({
		where: {
			id: req.params.feedback_id
		}
	}).then(() => successResponse(201, 'Feedback deleted', res))
		.catch(err => errorResponse(400, err.message, res))
})

// Register
app.post("/register", async (req, res) => {
	console.log('Register request: ', req.body)
	
	const {login, password} = req.body

	if (password.length < 5) {
		errorResponse(400, 'Password must be at least 5 characters long', res)
		return
	}

	const user = await User.findOne({ where: { login } })

	if (user) {
		errorResponse(400, 'Such user already exists', res)
		return
	}

	if (!user) {
		const password_hash = await bcrypt.hash(password, 10)
		User.create({
			login,
			password_hash
		}).then(() => successResponse(201, 'User created', res))
			.catch(err => errorResponse(500, err.message, res))
	}
})

// Login
app.post("/login", async (req, res) => {
	const {login, password} = req.body

	const user = await User.findOne({ where: { login } })

	if (!user) errorResponse(400, 'User not found', res)

	if (user) {
		const match = await bcrypt.compare(password, user.password_hash)
		if (match) {
			const authData = {
				user_id: user.id,
				login
			}

			res.cookie('auth-data', JSON.stringify(authData), {maxAge: 60000000})
			successResponse(200, 'Logged in', res)
		} else {
			errorResponse(400, 'Invalid password', res)
		}
	}
})

const port = config.get('server-port')
app.listen(+port, () => console.log('App has been started on port', config.get('server-port')))

export {}