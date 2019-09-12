import React from 'react';
import Message from './Message';
import axios from 'axios';
import messages from '../models/messages.json'

export default class Messages extends React.Component {
  createMessageComponents(messages) {
    return Object.keys(messages["general"]).map(m =>
      <Message time={ (d =>
        `${d.getHours()}:${d.getMinutes()}`)(new Date(parseInt(m))) }
               sender={ messages["general"][m].sender }
               body={ messages["general"][m].body }/>)
  }

  getMessages() {
    // return axios.get("http://localhost:3001/messages")
    //   .then(m => createMessageComponents(m));

    return this.createMessageComponents(messages);

  }

  render () {
    return (
      <div className="messages">
      { this.getMessages() }
      </div>
    );
  }
}
