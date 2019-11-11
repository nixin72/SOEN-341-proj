const express = require('express');
const router = express.Router();
const location = require('./users.json');

router.get("/users", async (req, res) => {
    res.send(location.json)
  });
  
 
  router.post("/users", async (req, res) => {
    const input = { ...req.body };
    req.location = {
      username: input.username,
      password: input.password
    };
  
    req.db.write();
    res.send({ pass: "success" });
  });