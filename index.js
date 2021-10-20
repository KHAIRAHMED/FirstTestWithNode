const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('hello world')
  })
app.listen(4040,()=>console.log("i am working"))