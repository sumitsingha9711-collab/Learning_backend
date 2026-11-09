const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    image: String,
    caption: String,

})

const postModel = mongoose.model("post", postSchema)

// post string is used here to define the name of the collection in the database. The collection will be named "posts" (plural form of "post") in the MongoDB database.

module.exports = postModel