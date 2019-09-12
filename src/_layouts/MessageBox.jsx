import React from 'react';

export default function MessageBox() {
  return (
    <div className="messageBox">
      <textarea rows="1" tabIndex="1" placeholder="Message #{{ channelName }}"></textarea>
      <div>
        <img src="https://www.sccpre.cat/mypng/full/77-774992_black-shape-paper-plane-paper-airplane-icon-instagram.png"
             width="30"
             height="30" />
      </div>
    </div>
  )
}
