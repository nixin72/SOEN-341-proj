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
 * @oas [post] /channels Creates a new channel
 * description: "Receives data about a channel and creates a new one given the information supplied"
 * parameters:
 *   - (body) channel {String} The name of the channel to create
 *   - (body) private {String} Whether to automatically add everyone to the channel
 */
router.post("/", async (req, res) => {
  const data = { ...req.body };

  const thisId = Math.max(...Object.keys(req.db.channels)) + 1;
  req.db.channel[thisId] = {
    name: data.name,
  };

  req.db.pinned[thisId] = [];

  if (!data.private) {
    for (let user of req.db.users) {
      user.channels.append(thisId);
    }
  }

  req.db.write();
  res.send("success");
});

/**
 * @oas [post] /channels/join Makes a user join a channel
 * description: "Receives a channel and userID and adds that channel to the user's channels"
 * parameters:
 *   - (body) channel {Integer:int32} The name of the channel to create
 *   - (body) user {Integer:int32} Whether to automatically add everyone to the channel
 */
router.post("/", async (req, res) => {
  const data = { ...req.body };

  req.db.users[data.user].channels.append(data.channel);

  req.db.write();
  res.send("success");
});

module.exports = router;


