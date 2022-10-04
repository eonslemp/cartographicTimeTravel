const { default: mongoose } = require('mongoose')
const Mongoose = require('mongoose')

const mapSchema = new mongoose.Schema({
    country: { type: String, required: true },
    city: { type: String, requireed: true },
    image: { type: String, required: true },
    illustrator: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true}


})