const express = require('express')

const Routes = require('./Routes')

require('dotenv').config

const app = express()


const methodOverride = require('method-override')

// const port = process.env.PORT

const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))

app.listen(port, () => {
    console.log('listening to port: ', port)
})