import React from 'react';
import newChannel from '../lib/newChannel.js';
import CSS from './Stylesheet_Channel.css';

export default function Sidebar() {
  return (
    <div className="sidebar">

      <button id="CreateChannelButton" onClick={newChannel}>  Create a new Channel </button>
	  <div id ="channelButtons">
	</div>
    </div>


  )
}
