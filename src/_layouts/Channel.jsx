import React from 'react';
<<<<<<< HEAD
import CSS from './Stylesheet_Channel.css';



=======
import ReactDOM from 'react-dom';
>>>>>>> origin

//channel creation function
//object created by "newChannel.js
export default function Channel(input) {
  this.name = input;
  return (
    <div className="Channel">
<<<<<<< HEAD


	  <button class="JoinChannelButn" onClick = {click} >{this.name}</button>

=======
      <button onClick={() => { click(this.name) }} >{this.name}</button>
>>>>>>> origin
    </div>
  )
}

//onclick function for handling new button
function click() {
  alert("joining channel");
  returnChat();
}


<<<<<<< HEAD
function click(name){
	alert("joining channel : " + name );


=======
//this function refreshes the chat
function returnChat() {
  ReactDOM.render(
    <div className="chat">
    </div>,
    document.getElementById('messageArea')
  )
>>>>>>> origin
}



