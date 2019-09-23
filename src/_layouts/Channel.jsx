import React from 'react';

export default function Channel(input) {		//maybe should be props in the input
	this.name = input;
  return (
    <div className="Channel">
     
	  
	  <button>{this.name}</button>
	  
    </div>
  )
}



 //when I add {alert("joining Channel")} it alerts after creation
	  //and then doesnt work after
	  //unsure if button is being correctly linked to the channel creation
	  //and retaining its values 