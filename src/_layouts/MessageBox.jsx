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
          <img src="https://i.ibb.co/FXCLcH8/pinpng-com-paper-plane-png-763407.png"
            width="30"
            height="30"
            alt="send Button" />
        </div>
      </div>
    )
  }
}
