const { metaProperty } = require('@babel/types')
const express = require('express')

const router = express.Router()

const Map = require('./models/mapModel')


// index
router.get('/', (req, res) => {
    // res.render('Index')

    Map.find({},(err, foundmap)=>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', {maps: foundmap})
        }
    })
})
// new




router.get('/new', (req, res) => {     
    res.render('New')
})
// create
router.post('/', (req, res) => {
    Map.create(req.body, (err, createdMap) =>{
        if(err){
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/products')
        }
    })
})

// map show page
// edit view

// router.get('/edit', (req, res) =>{

// })

// update

// delete

// show


// const {
//     AllMaps
// } = require('./Controllers/controller')


module.exports = router



// // Setup "create" route
// router.post('/', (req, res) => {
//     if (req.body.readyToEat === "on") {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     fruits.push(req.body)
//     res.redirect('/fruits')
// })

// // Setup "show" route  
// router.get('/:index', (req, res) => {
//     // res.send(fruits[req.params.index])
//     res.render('fruits/Show', { fruit: fruits[req.params.index] })
// })

// // Setup "edit" route
// router.get('/:index/edit', (req, res) => {
//     res.send('<form>Edit fruit</form>')
// })

// // Setup "update" route
// router.put('/:index', (req, res) => {
//     res.send('Updating a fruit at index! (in DB)')
// })

// // Setup "destroy" route
// router.delete('/:index', (req, res) => {
//     res.send('Deleting a fruit at index! (in DB)')
// })

// module.exports = router