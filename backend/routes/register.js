const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//username and encrypt password
router.post('/register',async (req,res) => {
    try{
        const {username,password,name,email} = req.body;

        const findUser = await User.findOne({username});
        if(findUser){
          return res.status(400).json({message:"username already exists!"});
        }
    
        const encryptedPassword = await bcrypt.hash(password,10);
        const newUser = new User({username, password:encryptedPassword,name,email});
        await newUser.save();
        return res.status(200).json({message:"user registered successfully!"})
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "internal server error"});
    
    }
  
});

module.exports = router;
