import React from 'react';
import sendMessage from '../lib/sendMessage'
import getUser from '../lib/User.js'
import {currentChatID} from './Channel.jsx'


export default class MessageBox extends React.Component {
  send(evt) {
    if (evt.key === "Enter") {
      evt.preventDefault();
      let sender = getUser();
      const channel = currentChatID;
      const body = evt.target.value;
      sendMessage(channel, sender, body);

      evt.target.value = "";
    }
  }

  render() {
    return (
      <div className="messageBox">
        <textarea id="sendMsg"
          onKeyDown={this.send}
          rows="1" tabIndex="1"
          placeholder="Message #{{ channelName }}"></textarea>
        <div>
          <img src="https://www.sccpre.cat/mypng/full/77-774992_black-shape-paper-plane-paper-airplane-icon-instagram.png"
            width="30"
            height="30"
            alt="send Button" />
        </div>
      </div>
    )
  }
}
