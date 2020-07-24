const express = require('express')
const db = require('./data/config')

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())

server.listen(PORT, console.log(`Server running on PORT ${PORT}`))



