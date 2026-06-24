// server ko create krna 

const express = require("express")


const app = express()

app.use(express.json()) //middle ware 

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created succesfully"
    })

    app.get('/notes', (req, res) => {
        res.status(200).json({
            message: "note send",
            notes: notes
        })
    })

    app.delete('/notes/:index', (req, res) => {  //index tell index of nodes
        const index = req.params.index

        delete notes[index]

        res.status(200).json({
            message: "note deleted"
        })
    })

    app.patch('/notes/:index', (req, res) => {
        const index = req.params.index
        const Description = req.body.Description

        notes[ index ].Description = Description

            res.status(200).json({
                message: "notes updated"
            })
    })
})

module.exports = app