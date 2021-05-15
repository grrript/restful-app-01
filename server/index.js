const express = require('express')
const app = express()
const cors = require('cors')
const data = require('./data')

app.use(cors())
app.use(express.json())

app.use('/test', (req, res) => {
  console.log('testing endpoint /test')
  res.json({ id: 1, name: 'John' })
})
app.use('/list', (req, res) => {
  console.log('testing endpoint /list')
  console.log('testing endpoint /list data:', data)
  res.json(data)
})
app.listen(9000, () => {
  console.log(`auth express app listening on port 9000`)
})
