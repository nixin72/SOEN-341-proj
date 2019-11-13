const express = require('express');
const router = express.Router();

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
  msg.timestamp = msg.timestamp || Date.now();
  if (msg.sender === undefined || msg.channel === undefined || msg.body === undefined)
    return res.status(400).send({ fail: "Invalid parameters passed." })

  req.db.messages[msg.channel][msg.timestamp] = {
    sender: req.db.users[msg.sender].username,
    body: msg.body
  };

  req.db.write();
 
  
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

/**
 * @oas [post] /messages/pin Pin a message in a channel
 * description: Receives the ID of the channel and message IDs and adds the message ID to the list of pinned messages for that channel
 * parameters:
 *   - (body) channel {Integer:int32} The id of the channel to pin the message to
 *   - (body) message {Integer:int32} The id of the message to pin
 */
router.post("/pins", async (req, res) => {
  if (req.body.channel === undefined || req.body.message === undefined) {
    return res.status(400).json({ fail: "Invalid parameters passed" })
  }

  try {
    if (req.db.pinned[req.body.channel].length >= 50) {
      return res.status(400).json({ fail: "max number of pins reached" })
    }
    else {
      req.db.pinned[req.body.channel].push(req.body.message);
    }
  }
  catch (err) {
    return res.status(400).json({ fail: "Channel doesn't exist!" })
  }

  req.db.write();
  res.send({ pass: "success" });
});

/**
 * @oas [get] /messages/pins Gets all the pinned messages for a channel
 * description: Returns all of the messages in a channel that have been pinned
 * parameters:
 *   - (query) channel {Integer:int32} The id of the channel to get the pinned messages from
 */
router.get("/pins", async (req, res) => {
  if (req.query.channel === undefined)
    return res.status(400).send({ fail: "Invalid parameters passed." })

  try {
    let messages = {};
    req.db.pinned[req.query.channel].forEach(id => {
      messages[id] = req.db.messages[req.query.channel][id];
    });

    res.json(messages)
  }
  catch (err) {
    res.status(400).json({ fail: "" })
  }
});

module.exports = router;
