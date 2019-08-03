const express = require('express')
const app = express()
app.use(express.static('public'))


app.get('/', (req, res, next) => res.send("hello world"))
app.get('/about', (req, res, next) => res.sendFile(__dirname + "/views/about.html"))





app.listen(5000, () => console.log('listening on port 5000...'))