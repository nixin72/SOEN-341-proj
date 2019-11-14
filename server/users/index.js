const express = require('express');
const router = express.Router();



router.post("/", async (req, res) => {  //recieves creation of a user, havent impelmeted checking current users 
    const data = { ...req.body };
  
   req.db.users[data.username] = {
      password: data.password
    };
   req.db.write();
   res.send({ pass: data.password });
});


///returning strings just for successful or failure login attempts
router.post('/login', function (req, res) {
  const data = {...req.body };


  if(req.db.users[data.username].password == data.password){
   res.send({ pass: "success"})
    }
  else{
    res.status(401).send({ fail: "Incorrect password"})
      }
});
  
  module.exports = router;