const express = require('express')

require('./config/mongoose')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}.`)
})
