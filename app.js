require('dotenv').config()

const express = require('express')
    , app     = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , path = require('path')
    , cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, './client/build')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.route('/')
  .get((req, res, next) => res.sendFile(path.join(__dirname, './client/build/index.html')))

const time = new Date()
const cb = () => console.log(`${time.toLocaleTimeString('en-GB')}: Server initialised on PORT [${PORT}]...`)
const server = app.listen(PORT, cb)
