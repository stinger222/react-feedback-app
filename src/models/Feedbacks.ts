const Sequelize = require('sequelize');
const db = require('../../database')

const Feedbacks = db.define('feedbacks', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	user_id: {
		type: Sequelize.INTEGER
	},
	text: {
		type: Sequelize.STRING
	},
	rating: {
		type: Sequelize.INTEGER
	}
},{
	timestamps: false
})

module.exports = Feedbacks
export {}