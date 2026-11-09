const mongoose = require('mongoose')

async function connectDB() {

    await mongoose.connect("mongodb+srv://sumitsingha9711_db_user:Ppu8eDxjtUa2kPYf@cluster0.n5a8e71.mongodb.net/halley")

    console.log("DB is connected");

}
module.exports = connectDB