const Sequelize = require('sequelize');
const db = require('../../database')

const User = db.define('users', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	login: {
		type: Sequelize.STRING
	},
	password_hash: {
		type: Sequelize.STRING
	},
	created_at: {
		type: Sequelize.DATE
	}
},{
	timestamps: false
})

module.exports = User
export {}