const express = require('express');
const router = express.Router();
const fs = require("fs");



//sending a user to the database
//have not implemented checking current password

router.post("/", async (req, res) => {
    const data = { ...req.body };
  
   req.db.users[data.username] = {
      password: data.password
    };
   req.db.write();
   res.send({ pass: "success" });
});


  
router.get('/', function (req, res) {

  const date = {...req.body};

  if(req.db.users[data.user].password == data.password{
  
    res.send({ pass: "success"})

  }
  else{

    res.send({ pass: "fail"})

  }
    res.send('hello world')
  })


  module.exports = router;