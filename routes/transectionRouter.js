const express = require('express')
const { getAllTeransection, addtransection, edittransection, deleteTran } = require('../controller/transectionctrl')


const router = express.Router()

router.post('/add-transection', addtransection)
router.delete('/delete-transection/:id', deleteTran)

router.post('/get-transection', getAllTeransection)




module.exports = router