const express = require('express')

const msgFile = '../models/messages.json';
const router = express.Router();

router.get("/", async(req, res) => {
  const messages = require(msgFile);
  res.json(messages);
});

router.post("/", async(req, res) => {
  const message = { ...req.body };
  console.log(message);
})

module.exports = router;