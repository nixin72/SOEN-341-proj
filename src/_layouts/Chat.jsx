import React from 'react';
import Messages from './Messages';
import MessageBox from './MessageBox';

export default function Chat() {
  return (
    <div className="chat">
      <div id="messageArea">
        <Messages channel="general" />
      </div>
      <div>
        <hr />
      </div>
      <MessageBox />
    </div>
  );
}
