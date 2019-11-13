import axios from "axios";

export default function sendMessage(channel, sender, body) {
  axios.post("http://localhost:3001/messages", {
    channel, sender, body, timestamp: Date.now()
  }).then(data => console.log("received") )
}


