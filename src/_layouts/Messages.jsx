import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import axios from 'axios';

export default function Messages(props) {
  let messages = [];

  //do we need the messages array

  setInterval(() => {
    messages = getMessages(props.channel);
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
  return axios.get("http://localhost:3001/messages?channel=general&" + channel)
}

function createMessageComponents(messages) {
  return Object.keys(messages).map(m =>
    <Message time={(d =>
      `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m)))}
      sender={messages[m].sender}
      body={messages[m].body} />)
}
