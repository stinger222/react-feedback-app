const Feedbacks = require('./src/models/Feedbacks')
const cookieParser = require('cookie-parser') 
const User = require('./src/models/User')
const express = require('express')
const config = require('config')
const bcrypt = require('bcrypt')

const app = express()

const allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', config.get('client-origin'));
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Headers", "Content-Type")
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
  next();  
}

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
app.use(allowCrossDomain)

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

app.post('/api/feedback', (req, res) => {
	const {text, rating} = req.body
	Feedbacks.create({
		user_id: 1,
		rating,
		text
	}).then(() => successResponse(201, 'Feedback created', res))
		.catch(err => errorResponse(400, err.message, res))
})


app.delete('/api/feedback/:feedback_id', (req, res) => {
	Feedbacks.destroy({
		where: {
			id: req.params.feedback_id
		}
	}).then(() => successResponse(201, 'Feedback deleted', res))
		.catch(err => errorResponse(400, err.message, res))
})

// auth part

app.post("/register", async (req, res) => {
	console.log('Register request: ', req.body)
	
	const {login, password} = req.body

	if (password.length < 7) {
		errorResponse(400, 'Password must be at least 7 characters long', res)
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

app.post("/login", async (req, res) => {
	const {login, password} = req.body

	const user = await User.findOne({ where: { login } })

	if (!user) errorResponse(400, 'User not found', res)

	if (user) {
		const match = await bcrypt.compare(password, user.password_hash)
		if (match) {
			res.cookie('authorized', 'true', {maxAge: 600000})
			successResponse(200, 'Logged in', res)
		} else {
			errorResponse(400, 'Invalid password', res)
		}
	}
})

const port = config.get('server-port')
app.listen(+port, () => console.log('App has been started on port', config.get('server-port')))
