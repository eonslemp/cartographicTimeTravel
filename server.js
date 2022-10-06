
// importing express
const express = require('express')
// import for the app's 'induces' routes
const Routes = require('./Routes')

// const expressReactViews = require('express-react-views')
// allowing access for the dotenv variables
require('dotenv').config()
// creating server object
const app = express()

// import method override to access PUT functionality
const methodOverride = require('method-override')
// importing database connection
const mongoConfig = require('./config')




// port
const port = process.env.PORT
// const port = 5000

// setting view engine
app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
app.engine('jsx', require('express-react-views').createEngine())


// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use('/products', Routes)

// connecting server to port
app.listen(port, () => {
    console.log(`listening to port: ${port}`)
})
// sets up acccess to database
mongoConfig()







