const express = require('express');
const router = express.Router();
const fs = require("fs");



//sending a user to the database
//have not implemented checking current password
//post are for creating users and then 
//get are for logging in requests 

router.post("/", async (req, res) => {
    const data = { ...req.body };
  
   req.db.users[data.username] = {
      password: data.password
    };
   req.db.write();
   res.send({ pass: "success" });
});



///returning strings just for successful or failure login attempts
  
router.get('/', function (req, res) {
  const data = {...req.body};

  if(req.db.users[data.user].password == data.password){
    res.send({ pass: "success"})
  }
  else{

    res.send({ pass: "fail"})

  }

  });


  module.exports = router;