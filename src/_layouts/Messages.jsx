import React from 'react';
import Message from './Message';
import messages from "../models/messages.json";

export default function Messages() {
  function getMessages() {
    return Object.keys(messages["general"]).map(m =>
      <Message time={ (d =>
        `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m))) }
               sender={ messages["general"][m].sender }
               body={ messages["general"][m].body }/>
    )
  }

  return (
    <div className="messages">
      { getMessages() }
    </div>
  );
}
