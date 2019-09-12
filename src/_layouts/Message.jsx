import React from 'react';

export default function Message(props) {
  return (
    <div className="message">
      <div className="time">{ props.time }</div>
      <div className="sender">{ props.sender }</div>
      <div className="body">{ props.body }</div>
    </div>
  )
}
