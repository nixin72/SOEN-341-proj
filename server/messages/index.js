const express = require('express');
const router = express.Router();
const fs = require("fs");

/**
 * @oas [get] /messages Get all messages for the channel
 * description: "List all messages that the user can view in this specific channel"
 * parameters:
 *   - (query) channel {Integer:int32} the ID for the channel from which to get messages
 */
router.get("/", async (req, res) => {
  res.json(req.db.messages[req.query.channel]);
});

/**
 * @oas [post] /messages send a new message
 * description: "Receives data pertaining to a new message and saves in the database"
 * parameters:
 *   - (body) channel {Integer:int32} The id of the channel the message was sent to
 *   - (body) timestamp {String} The client timestamp of when the message was sent
 *   - (body) sender {Integer:int32} The id of the user that sent the message
 *   - (body) body {String} The content of the message itself
 */
router.post("/", async (req, res) => {
  const msg = { ...req.body };

  req.db.messages[msg.channel][msg.timestamp] = {
    sender: msg.sender,
    body: msg.body
  };

  req.db.write();
  res.send("success");
});

/**
 * @oas [get] /messages/latest test if the client is up to date on messages
 * description: Receives a timestamp from the client for the last message they received. If the timestamp is up to date, return false. True otherwise.
 * parameters:
 *   - (query) timestamp {Integer:int32} The timestamp of the last message on the client
 *   - (query) channel {Integer:int32} The id of the channel to look in
 */
router.get("/latest", async (req, res) => {
  let update = false;

  if (req.db.messages[req.query.channel]) {
    const serverLatest = Math.max(...Object.keys(req.db.messages[req.query.channel]));
    const clientLatest = req.query.timestamp;
    update = serverLatest === clientLatest;
  }

  res.json({ update });
});

module.exports = router;
