const express = require('express')

const app = express()

app.get('/1', (req, res) => {
  res.json({
    param: 1
  })
})
