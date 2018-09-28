const express = require('express')
const burger = require('../models/burger')

let router = express.Router()

router.get('/', (req, res) => {
	burger.selectAll(data => res.render('index', { burgers: data }))
})

router.post('/', (req, res) => {
	burger.insertOne(req.body.burgerName, (status) => {
		res.status(status)
		res.redirect('/')
	})
})

router.get('/burgers', (req, res) => {
	burger.selectAll(data => res.json(data))
})

router.put('/burgers/:id', (req, res) => {
	burger.updateOne(req.params.id, { devoured: true }, () => {
		res.end()
	})
})

module.exports = router