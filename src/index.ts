const path = require('path')
const express = require('express')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.json({
    url: req.url
  })
})

app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname, 't.txt'))
})

app.get('/:userId', (req, res) => {
  res.json(req.params)
})

app.get('/x/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.listen(3000)
