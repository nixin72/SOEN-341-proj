import ReactDOM from 'react-dom';
import Channel from '../_layouts/Channel.jsx'
import React from 'react';
import sidebar from '../_layouts/Sidebar.jsx'
var channelArray = [];


function newChannel(){
	var name = prompt("Please enter the name of the new channel");
	var fresh = new Channel(name);
	channelArray.push(fresh);
	ReactDOM.render( <div>{channelArray}</div>, document.getElementById('channelButtons'))
	
}

export default newChannel;
