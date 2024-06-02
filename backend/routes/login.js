const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//username and encrypt password
router.post('/login',async (req,res) => {
    try{
        const {username,password} = req.body;

        const findUser = await User.findOne({username});
        if(!findUser){
          return res.status(400).json({message:"username does not exists!"});
        }
    
        const isMatch = await bcrypt.compare(password,findUser.password);
       if(!isMatch)
        {
            return res.status(401).json({message:"inavalid credentials"});
        }
        return res.status(200).json({message:"Logged in successfully!"})
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "internal server error"});
    
    }
  
});

module.exports = router;
