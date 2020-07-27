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

server.get('/cars/:id', async(req, res, next) => {
  try {
    const car = await db('car-dealer')
    .where({'id': req.params.id})
    res.json(car)
  } catch (error) {
    next(error)
  }
})

server.post('/cars', async(req, res, next) => {
  try {
    const newCar = await db('car-dealer')
    .insert(req.body)
    res.status(201).json(newCar)
  } catch (error) {
   next(error) 
  }
})

server.put('/cars/:id', async (req, res, next) => {
  try {
     await db('car-dealer')
    .update(req.body)
    .where({id: req.params.id})

    const updatedList = await db('car-dealer')
    res.status(201).json(updatedList)

  } catch (error) {
    next(error)
  }
})

server.delete('/cars/:id', async(req, res, next) => {
  try {
     await db('car-dealer')
    .where({id: req.params.id})
    .del()

    const updatedList = await db('car-dealer')
    res.json(updatedList)

  } catch (error) {
    next(error)
  }
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ errorMessage: "something happened" })
})

server.listen(PORT, console.log(`Server running on PORT ${PORT}`))



