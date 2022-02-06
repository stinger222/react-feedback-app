const express = require('express')
const config = require('config')
const mysql = require('mysql')
const cookieParser = require('cookie-parser') 
const cors = require('cors')

const app = express()

const db = mysql.createConnection(config.get('sql-config'))
db.connect()
db.query("SET SESSION wait_timeout = 604800")

app.use(cookieParser())
app.use(express.json())

const allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', config.get('client-origin'));
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next();  
}
app.use(allowCrossDomain);

app.get('/api/user/:user_id', (req, res) => {
	const query = `SELECT * FROM \`feedbacks\` WHERE user_id = ${req.params.user_id}`

 	db.query(query, (err, data) => {
		console.log("GET /users/", req.params.user_id);

		if (err) {
			res.statusCode = 400
			res.json({error: "Error occurred!"})
		} else {	
			res.statusCode = 200
			res.send(data)
		}
	})
})

app.get('/api/feedback/:feedback_id', (req, res) => {
	const query = `SELECT * FROM \`feedbacks\` WHERE feedback_id = ${req.params.feedback_id};`

	db.query(query, (err, data) => {
		console.log("GET /feedback/", req.params.feedback_id);
		if (err) {
			res.statusCode = 400
			res.json({error: "Error occurred!"})
		} else {	
			res.statusCode = 200
			res.send(data)
		}
	})
})

app.put('/api/feedback/:feedback_id', (req, res) => {
	const query = `UPDATE \`feedbacks\`
	SET \`text\` = '${req.body.text}',
	\`rating\` = '${req.body.rating}'
	WHERE \`feedbacks\`.\`id\` = ${req.params.feedback_id};`
	
	db.query(query, (err) => {
		console.log("PUT /feedback", req.params.feedback_id)
		if (err) {
			res.statusCode = 400
			res.json({error: "Updating failed!"})
		} else {	
			res.statusCode = 200
			res.json({message: 'Feedback updated successfully!'})
		}
	})
})

app.post('/api/feedback', (req, res) => {
	const query = `INSERT INTO \`feedbacks\`
	(\`user_id\`, \`text\`, \`rating\`) VALUES ('1', '${req.body.text}', '${req.body.rating}')`
	
	db.query(query, (err) => {
		console.log("POST /feedback")
		if (err) {
			res.statusCode = 400
			res.json({error: "Appending failed!"})
		} else {	
			res.statusCode = 201
			res.json({message: 'Feedback added successfully!'})
		}
	})
})

app.delete('/api/feedback/:feedback_id', (req, res) => {
	const query = `DELETE FROM \`feedbacks\` WHERE \`feedbacks\`.\`id\` = ${req.params.feedback_id}`
	
	db.query(query, (err) => {
		console.log("POST /feedback")
		if (err) {
			res.statusCode = 400
			res.json({error: "Deleting failed!"})
		} else {	
			res.statusCode = 200
			res.json({message: 'Feedback deleted successfully!'})
		}
	})
})

// auth part

app.post("/register", (req, res) => {
	console.log('Register request');
	const insertQuery = `INSERT INTO \`users\` (\`login\`, \`password_hash\`)
	VALUES ('${req.body.login}', '${req.body.password}')`

	const checkQuery = 'SELECT * FROM \`users\` WHERE login = ?'
	
	db.query(checkQuery, [req.body.login], (err, data) => {
		if (data.length > 0) {
			res.statusCode = 400
			res.json({error: "Such user already exists!"})
		} else {
			db.query(insertQuery, (err) => {
				if (err) {
					res.statusCode = 400
					res.json({error: "User creating is failed!"})
				} else {	
					res.statusCode = 201
					res.json({message: 'User created successfully!'})
				}
			})
		}
	})
})

app.post("/login", (req, res) => {
	db.query('SELECT * FROM `users` WHERE `login` = ? AND `password_hash` = ? LIMIT 1', [req.body.login, req.body.password], (err, users) => {
		if (users.length === 0) {
			res.statusCode = 400
			res.json({error: 'User not found!'})
		}
		else {
			res.cookie('authorized', 'true', {maxAge: 600000}).json({message: 'success'})
		}
	})
})

const port = config.get('server-port')
app.listen(+port, () => console.log('app has been started on port 3001, kekw'))