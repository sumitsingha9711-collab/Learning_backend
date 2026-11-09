const express = require('express')
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json()) 

/* note = {title, description} */

/*CRUD OPERATION

create - post
read - get 
upaate - patch
delete - delete

*/

app.post("/notes", async (req, res) =>{

    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note Created"
    })
})

app.get("/notes", async (req, res) =>{

    const notes = await noteModel.find()  // find return array always

    // find => [{},{}] or []
    // findone => {} or null, used to find single document

    res.status(201).json({
        message: "Notes fetch Succesfully",
        notes: notes
    })
})

app.delete("/notes/:id", async (req, res) =>{

    const id = req.params.id
    await noteModel.findOneAndDelete({ _id: id })

    res.status(201).json({
        message: "Note Deleted"
    })
})

app.patch("/notes/:id", async (req, res) =>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({ _id: id }, { description: description })

    res.status(201).json({
        message: "Note Updated"
    })
})

module.exports = app                                                