const express = require('express')
const colors = require('colors')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send({ message: 'Hello There!' })
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold))
