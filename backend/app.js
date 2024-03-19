//Dependencies
const express = require('express')
const methodOverride = require('method-override')

// Configuaration
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Controllers
app.use('/todolist', require('./controllers/listcontroller.js'))

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log("listening on port", PORT)
})