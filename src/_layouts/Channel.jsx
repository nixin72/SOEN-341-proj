import React from 'react';
import ReactDOM from 'react-dom';
import getMessages from './Messages';
import currentChannel from '../lib/vars.js'
import setName from '../lib/vars.js'

//setting up a global var for this
//var channelName = "general";

//channel creation function
//object created by "newChannel.js

//this function may need to create new json block
export default function Channel(input) {
  this.name = input;
  return (
    <div className="Channel">
      <button onClick={() => { click(this.name) }} >{this.name}</button>
    </div>
  )
}


//onclick function for handling new button
function click(input) {
  alert("joining channel" + input );
  getMessages(input);
  //at the moment this global varible doesnt seem to be working
  setName(input);
  
}






