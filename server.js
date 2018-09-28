const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const burgersController = require('./controllers/burgersController')

const app = express()

const PORT = process.env.PORT || 5000

// Setup handlebars
app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// Setup Morgan logger
app.use(logger('dev'))

app.use(express.static('./public'))

// Setup Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/', burgersController)

// Start Server listening on (PORT)
app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))