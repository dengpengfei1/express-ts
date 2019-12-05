const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  // res.status(302).location('http://baidu.com'); // status 302 时设置 location，重定向到目的地址
  res.json({
    url: req.url
  })
})

app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname, 't.txt'))
})

app.get('/:userId', (req, res, next) => {
  res.json(req.params)
  console.log(req.originalUrl);
  next()
})

app.get('/x/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.listen(3000)
