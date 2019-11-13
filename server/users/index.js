const express = require('express');
const router = express.Router();




router.post("/", async (req, res) => {
    const data = { ...req.body };
  
    req.db.users = {
      username: data.username,
      password: data.password
    };
  
    ///not yet checking if user exists dont want to overcomplicate
  
    req.db.write();
    res.send("there we go");
  });
