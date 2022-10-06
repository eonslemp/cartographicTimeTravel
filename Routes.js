// import router
const express = require('express')
// defining router variable
const router = express.Router()
// import MONGO schema 
const Map = require('./models/mapModel')



// set  up index route
router.get('/', (req, res) => {
 
    Map.find({},(err, foundmap)=>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', {maps: foundmap})
        }
    })
})

// edit functionality for the  database
 router.put('/:id', (req, res) =>{
        Map.findByIdAndUpdate(req.params.id, req.body, (err,foundMap) =>{
            if(err) {
                res.status(400).json(err)
            } else {
                res.status(200).redirect(`/products/${req.params.id}`)
            }
        })
 })
// routes accessing the create new product page
router.get('/new', (req, res) => {     
    res.render('New')
})
// route for product creation
router.post('/', (req, res) => {
    Map.create(req.body, (err, createdMap) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
})


// accesses map show page
router.get('/:id', (req, res) => {
    Map.findById(req.params.id, (err, foundMap) =>{
        if(err){
            res.status(404).json(err)
        } else {
            res.status(200).render('Show', {map: foundMap})
        }
    })
})

// accesses edit page
router.get('/:id/edit', (req, res) => {
    Map.findById(req.params.id, (err, foundMap) =>{
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', {map: foundMap})
        }
    })
})

// delete route
router.delete('/:id', (req, res) => {
    Map.findByIdAndDelete(req.params.id, (err, mapDelete) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
})
// export of router object

module.exports = router

