import React from 'react';
import Messages from './Messages';
import MessageBox from './MessageBox';
import {currentChatID} from './Channel.jsx';

export default function Chat() {
  return (
    <div className="chat">
      <div id="messageArea">
        <Messages channel={currentChatID} />
      </div>
      <div>
        <hr />
      </div>
      <MessageBox />
    </div>
  );
}
