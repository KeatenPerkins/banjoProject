console.log('Starting Server')
const express = require('express')
// Allows me to process JSON objects
const bodyParser = require('body-parser')
const cors = require('cors')
// Allows me to see what is trying to connect to my endpoint
const morgan = require('morgan')
const { sequelize } = require('./models')
// config holds the server port for local port settings
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// passport for user authentication
require('./passport')

// All endpoints will be in routes
require('./routes')(app)

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log('Server started on port:', config.port)
  })
