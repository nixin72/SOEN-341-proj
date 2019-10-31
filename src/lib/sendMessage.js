import axios from "axios";
import messages from '../models/messages.json';

export default function sendMessage(channel, sender, body) {
  const timestamp = Date.now().toString();
  messages[channel][timestamp] = {
    sender, body
  }

  axios.post("http://localhost:3001/messages", {
    channel, sender, body, timestamp: Date.now()
  }).then(data => console.log("received"))

  return messages;
}
