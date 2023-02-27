const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connetDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOODB_URL)
        console.log(`connting mongodb ${mongoose.connection.host}`.cyan)
    } catch (error) {
        console.log(`${error}`.bgRed);
        process.exit(1)
    }
}

module.exports = connetDB