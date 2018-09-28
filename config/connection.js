//still need to set this up
const mysql = require('mysql')

const pool = mysql.createPool({
	connectionLimit: 10,
	host: '',
	user: '',
	password: '',
	database: ''
})
pool.on('acquire', connection => {
	console.log(`Connection ${connection.threadId} acquired.`)
})

pool.on('enqueue', () => console.log(`Waiting for available connection slot`))

pool.on('release', connection => console.log(`Connection ${connection.threadId} released`))

module.exports = pool