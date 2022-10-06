// this file sets the structure for the MONGO database
const mongoose = require('mongoose')
// these map data deemed relevant for the app
const mapSchema = new mongoose.Schema({
    country: { type: String, required: true },
    city: { type: String, requireed: true },
    year: { type: String, required: true},
    path: { type: String, required: true },
    illustrator: { type: String, required: true },
    quantity: { type: String, required: true },
    price: { type: String, required: true}


})

// sets variable for 'Map' construct
const Map = mongoose.model('Map', mapSchema)
// export for data construct
module.exports = Map




