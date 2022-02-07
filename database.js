const Sequelize = require('sequelize')
const config = require('config')

const {database, user, password } = config.get('sql-config')

const db = new Sequelize(database, user, password, {
  host: 'localhost',
  dialect: 'mysql'
});

db.authenticate().then(() => {
	console.log('Sequelize: database is connected');
}).catch(e => {
	console.log('Sequelize: can\'t connect to the database!');
	console.error(e);
})

module.exports = db