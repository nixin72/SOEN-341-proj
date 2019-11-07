import React from 'react';
import CSS from './Stylesheet_Channel.css';




export default function Channel(input) {		//maybe should be props in the input
	this.name = input;
  return (
    <div className="Channel">


	  <button class="JoinChannelButn" onClick = {click} >{this.name}</button>

    </div>
  )
}


function click(name){
	alert("joining channel : " + name );


}


 //when I add {alert("joining Channel")} it alerts after creation
	 ///Fixed that issue^

//now click will run the necessary features to update the chat
