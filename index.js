const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

//view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', (req, res) => {
    res.render('index')
})

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('connect with port 3000');
})