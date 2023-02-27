

const asynhandeler = require('express-async-handler')
const usermodel = require('../models/usermodel')
// ! login user

const loginuser = asynhandeler(async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email);
        const user = await usermodel.findOne({ email, password })

        if (user && password) {
            res.status(200).json({
                succes: true,
                id: user.id,
                name: user.name,
                email: user.email
            })
        } else {
            res.status(400).json({ succes: false, meg: "User not found" })
        }
    } catch (error) {
        console.log(error);
        // res.status(401).json({ succes: false, error })
    }
})

// ! register user
const registeruser = asynhandeler(async (req, res) => {
    try {
        // const { email, password } = req.body
        const { name, email, password } = req.body;

        const alredeyemail = await usermodel.findOne({ email })
        if (alredeyemail) {
            return res.status(400).json({ meg: "Alredy use email" })
            return
        }
        const newUSer = await usermodel.create({
            name,
            email,
            password,
        })

        if (!newUSer) {
            return res.status(400).json({ succes: false, meg: "User not found" })

        }
        res.status(200).json({
            succes: true,
            newUSer
        })
    } catch (error) {
        res.status(401).json({ succes: false, error })
    }
})

module.exports = {
    loginuser,
    registeruser
}