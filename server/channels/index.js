const express = require('express');
const router = express.Router();
const fs = require("fs");

/**
 * @oas [get] /channels Get a list of all channels
 * description: "List all channels that a user has access to"
 * parameters:
 *   - (query) userId {Integer:int32} the ID of the user for whom to get channels
 */
router.get("/", async (req, res) => {
  let userChannels = req.db.users[req.query.userId].channels;
  let channels = Object.keys(req.db.channels).filter(ch => userChannels.includes(ch));
  res.json(channels);
});

/**
 * @oas [post] /channel Creates a new channel
 * description: "Receives data about a channel and creates a new one given the information supplied"
 * parameters:
 *   - (body) channel {String} The name of the channel to create
 *   - (body) private {String} Whether to automatically add everyone to the channel
 */
router.post("/", async (req, res) => {
  const data = { ...req.body };

  const thisId = req.db.channelID++;
  req.db.channel[thisId] = {
    name: data.name,
  };

  if (!data.private) {
    for (let user of req.db.users) {
      user.channels.append(thisId);
    }
  }

  res.send("success");
});

module.exports = router;


