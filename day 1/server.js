const express = require('express');

const app = express()  //create server

app.get("/", (req, res) =>{  //sending request to server
    res.send("hello server is running")
})


app.get("/about", (req, res) =>{  // its means to get request in about page 
    res.send("this is about page")
})
app.listen(3000) //start server on port 3000