const express = require('express')

const router = express.Router()

const Map = require('./models/worldModel')

const {
    AllMaps
} = require('./controllers/CityController')