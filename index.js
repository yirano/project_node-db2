const express = require('express')
const db = require('./data/config')

const server = express()
const PORT = process.env.PORT || 4000

server.use(express.json())

server.get('/cars', async (req, res, next) => {
  try {
    const cars = await db('car-dealer')
    res.json(cars)
  } catch (error) {
    next(error)
  }
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ errorMessage: "something happened" })
})

server.listen(PORT, console.log(`Server running on PORT ${PORT}`))



