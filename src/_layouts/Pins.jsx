import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import axios from 'axios';

export default function Pins(props) {
  getMessages(props.channel).then(data => {
    console.log(data)
    ReactDOM.render(
      <div className="messages">
        {createMessageComponents(data.data)}
      </div>,
      document.getElementById('pins')
    )
  })

  return (
    <div className="messages">
    </div>
  )
}

function getMessages(channel) {
  return axios.get("http://localhost:3001/messages/pins?channel=" + channel)
}

function createMessageComponents(messages) {
  return Object.keys(messages).map(m =>
    <Message time={(d =>
      `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m)))}
      sender={messages[m].sender}
      body={messages[m].body} />)
}

