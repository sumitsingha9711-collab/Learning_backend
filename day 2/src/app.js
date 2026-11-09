// server ko start krne ka kam krta hai ye file

const express = require('express');

const app = express()
app.use(express.json()) //medium to send data in json format 

const notes = []

app.post("/notes", (req, res) =>{
    const note = req.body;
    notes.push(note);
    res.status(201).json({
        message: "note created successfully",
        note: note
    });
});

app.get("/notes", (req, res) =>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:index", (req, res) =>{  // every thing after : is a parameter which is dynamic
    const index = req.params.index //params is used to get the value of the parameter

    delete notes[index]

    res.status(200).json({
        message: "note deleted successfully",
    })
})

app.patch("/notes/:index", (req, res) =>{

    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "note updated successfully"
    })
})
module.exports = app