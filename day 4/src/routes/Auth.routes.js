const express = require('express');
const authController = require('../controllers/auth.controller')


const router = express.Router();

router.post("/register", authController.registerUser)

router.get("/test", (req, res) =>{
    console.log("cookie", req.cookies)
    res.json({
        message: "test route",
        cookies: res.cookies
    })
    
})


module.exports = router; 