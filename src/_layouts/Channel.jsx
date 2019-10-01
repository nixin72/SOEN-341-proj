import React from 'react';

export default function Channel(input) {		//maybe should be props in the input
	this.name = input;
  return (
    <div className="Channel">
     
	  
	  <button onClick = {click} >{this.name}</button>
	  
    </div>
  )
}


function click(){
	alert("joining channel" );
	
	
}


 //when I add {alert("joining Channel")} it alerts after creation
	 ///Fixed that issue^

//now click will run the neessicary feautres to update the chat
