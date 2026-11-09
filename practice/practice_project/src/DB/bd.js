const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect("")

    console.log("DB is connected");

}
module.exports = connectDB