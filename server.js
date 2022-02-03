const express = require('express')
const config = require('config')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

const db = mysql.createConnection(config.get('sql-config'))
db.connect();

app.use(cors())
app.use(express.json())

app.get('/api/user/:user_id', (req, res) => {
	const query = `SELECT * FROM \`feedbacks\` WHERE user_id = ${req.params.user_id}`

 	db.query(query, (err, data) => {
		console.log("GET /users/", req.params.user_id)

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
		console.log("GET /feedback/", req.params.feedback_id)
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
			res.json({message: 'feedback updated successfully'})
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
			res.json({message: 'feedback added successfully'})
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
			res.json({message: 'feedback deleted successfully'})
		}
	})
})



const port = config.get('server-port')
app.listen(+port, () => console.log('app has been started on port 3001, kekw'))