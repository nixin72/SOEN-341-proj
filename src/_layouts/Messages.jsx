import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import axios from 'axios';
import {currentChatID} from './Channel';

export default function Messages(props) {
  let messages = [];

  setInterval(() => {

    //messages = getMessages(props.channel);
    messages = getMessages(currentChatID);
    messages.then(data => {
      ReactDOM.render(
        <div className="messages">
          {createMessageComponents(data.data)}
        </div>,
        document.getElementById('messageArea')
      )
    })
  }, 1000)

  return (
    <div className="messages">
    </div>
  )
}

function getMessages(channel) {
  console.log("getting msg from " + channel);
  return axios.get("http://localhost:3001/messages?channel="+ channel);
}

function createMessageComponents(messages) {
  return Object.keys(messages).map(m =>
    <Message id={m} time={(d =>
      `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m)))}
      sender={messages[m].sender}
      body={messages[m].body} />)
}
