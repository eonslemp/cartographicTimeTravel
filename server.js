const express = require('express')

const Routes = require('./Routes')

// const expressReactViews = require('express-react-views')

require('dotenv').config()

const app = express()


const methodOverride = require('method-override')
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

app.listen(port, () => {
    console.log(`listening to port: ${port}`)
})

mongoConfig()





