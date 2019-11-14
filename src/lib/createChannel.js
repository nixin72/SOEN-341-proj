import axios from "axios";

export default function createChannel(channelName) {
  axios.post("http://localhost:3001/channels", {
    channelName
  }).then(data => console.log("New channel created"));
}
