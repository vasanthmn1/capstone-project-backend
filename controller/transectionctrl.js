const asynhandeler = require('express-async-handler')
const transecModel = require('../models/transec')


const addtransection = asynhandeler(async (req, res) => {
    try {
        const { userid, amount, catagory, type, description, date } = req.body
        if (!amount || !catagory || !type || !description || !date) {
            res.status(401).json({ success: false, massage: "field required" })
        }
        const newTransec = await transecModel.create({
            amount,
            catagory,
            description,
            date,
            type,
            userid
        })
        res.status(200).json({ success: true, newTransec })
    } catch (error) {
        console.log(error);
    }
})
//  get

const getAllTeransection = asynhandeler(async (req, res) => {
    try {
        const { userid, type } = req.body
        const transections = await transecModel.find({
            userid,
            ...(type !== 'all' && { type }),
        })
        res.status(200).json({ success: true, transections })
    } catch (error) {
        console.log(error)
    }
})




const deleteTran = asynhandeler(async (req, res) => {
    try {
        const del = await transecModel.findById(req.params.id)
        if (!del) {
            res.status(400).json({ massage: "not del" })
        }
        await del.remove()
        res.status(200).json({ success: true, massage: "tran Delete" })
    } catch (error) {
        console.log(error);
    }
})
module.exports = { getAllTeransection, addtransection, deleteTran }