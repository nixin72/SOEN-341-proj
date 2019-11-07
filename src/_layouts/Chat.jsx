import React from 'react';
import Messages from './Messages';
import MessageBox from './MessageBox';

export default function Chat() {
  return (
    <div className="chat">
      <div id="messageArea">
        <Messages channel="1" />
      </div>
      <div>
        <hr />
      </div>
      <MessageBox />
    </div>
  );
}
