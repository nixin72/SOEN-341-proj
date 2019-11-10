import React from 'react';
import sendMessage from '../lib/sendMessage'
import Chat from '../_layouts/Chat'

var currentChannel = 1;
export default class MessageBox extends React.Component {


  componentWillMount(){
    currentChannel = this.props.channel;
  }
  send(evt) {
    if (evt.key === "Enter") {
      evt.preventDefault();
      console.log("Channel is : ");

      console.log(currentChannel);
      const channel = currentChannel;
      const sender = "1";
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
