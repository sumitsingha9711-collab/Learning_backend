const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model')

async function registerUser(req, res) {

    const { username, email, password } = req.body;


    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)


    res.cookie("Token", token)

    res.status(201).json({
        message: "user register successfully",
        user,
    })

}


module.exports = { registerUser }