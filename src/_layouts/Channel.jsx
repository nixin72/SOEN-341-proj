import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './Stylesheet_Channel.css';
import axios from 'axios';
import {channelArray} from '../lib/newChannel.js'

var start = true;
var currentChatID;

if(start){
  currentChatID = 1;
  start = false;
}

//channel creation function
//object created by "newChannel.js
export default function Channel(input) {
  this.name = input;
  var size = channelArray.length;
  var id = size + 3;
  return (
    <div className="Channel">
      <button className="JoinChannelButn" id={id} onClick={() => { click(this.name,{id}) }} >{this.name}</button>
    </div>
  )
}

//onclick function for handling new button
function click(name,id) {
  alert("joining channel : " + name);
  //otherwise the id is trapped inside json object.
  currentChatID = id.id;
  console.log("Joining channel with id "+ currentChatID);
  returnChat();
}


//this function refreshes the chat
function returnChat() {
  ReactDOM.render(
    <div className="chat">
    </div>,
    document.getElementById('messageArea')
  )
}

//Exporting the currentChatID to make it accessible inside chat.jsx.
export {currentChatID};
