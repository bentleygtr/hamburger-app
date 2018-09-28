let dbCon = require('./connection')

const orm = {
	sql: '',
	selectAll(table, cb) {
		this.sql = `SELECT * FROM ??`
		dbCon.query(this.sql, table, (err, res) => {
			if (err) throw err
			cb(res)
		})
	},
	insertOne(table, vals, cb) {
		this.sql = `INSERT INTO ?? SET ?`
		dbCon.query(this.sql, [ table, vals ], (err, res) => {
			if (err) throw err
			// console.log(res)
			cb(res.insertId)
		})
	},
	updateOne(table, vals, id, cb) {
		this.sql = `UPDATE ?? SET ? WHERE ?`
		dbCon.query(this.sql, [ table, vals, { id: id } ], (err, res) => {
			if (err) throw err
			// console.log(res)
			cb(res.changedRows)
		})
	}
}

module.exports = orm