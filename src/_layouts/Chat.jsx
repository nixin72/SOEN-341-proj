import React from 'react';
import Messages from './Messages';
import MessageBox from './MessageBox';

export default function Chat() {
  return (
    <div className="chat">
      <Messages />
      <div>
        <hr />
      </div>
      <MessageBox />
    </div>
  );
}
