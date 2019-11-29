const express = require('express')

const app = express()

app.get('/:u', (req, res) => {
  res.json({
    url: req.url
  })
})

app.listen(3000)
