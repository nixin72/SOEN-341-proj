import ReactDOM from 'react-dom';
import Channel from '../_layouts/Channel.jsx'
import React from 'react';
import createChannel from "./createChannel";

let channelArray = [];

function newChannel() {
  let name = prompt("Please enter the name of the new channel");
  let fresh = new Channel(name);
  channelArray.push(fresh);
  ReactDOM.render(<div>{channelArray}</div>, document.getElementById('channelButtons'));



  createChannel(name);

}

export default newChannel;
