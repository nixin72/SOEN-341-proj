import React from 'react';
import axios from 'axios';

export default function Message(props) {
  return (
    <div className="message" id={props.id} >
      <div className="left">
        <div className="time">{props.time}</div>
        <div className="sender">{props.sender}</div>
        <div className="body">{props.body}</div>
      </div>
      <div className="right" onClick={pinMessage}>
        <div className="pin" >
          <img height="15" src="pin.png" />
        </div>
      </div>
    </div>
  )
}

function pinMessage(event) {
  let t = event.target;
  axios.post("http://localhost:3001/messages/pins", {
    channel: 1,
    message: t.parentElement.id
  });
}


