// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const mapSchema = new mongoose.Schema({
    country: { type: String, required: true },
    city: { type: String, requireed: true },
    year: { type: String, required: true},
    path: { type: String, required: true },
    illustrator: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true}


})


const Map = mongoose.model('Map', mapSchema)

module.exports = Map


