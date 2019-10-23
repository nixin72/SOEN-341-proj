import React from 'react';
import ReactDOM from 'react-dom';

//channel creation function
//object created by "newChannel.js
export default function Channel(input) {		
	this.name = input;
  return (
    <div className="Channel">
	  <button onClick = {click} >{this.name}</button>  
    </div>
  )
}

//onclick function for handling new button
function click(){
	alert("joining channel" );
	returnChat();	
}


//this function refreshes the chat 
function returnChat(){

ReactDOM.render(
<div className="chat">
</div>,
document.getElementById('messageArea')
)
  
}



