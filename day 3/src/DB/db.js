const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect("")   //if halley bd not found mongoose will create it 

    console.log("DB is connected")
    
}

module.exports = connectDB 
