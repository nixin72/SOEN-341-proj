import React from 'react';

export default function Message(props) {
  return (
    <div className="message" key={props.key}>
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
  console.log(t.parentElement)
}
