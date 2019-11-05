import ReactDOM from 'react-dom';
import React from 'react';

//this is the setup for the global current channel var
//this way the user will always know which channel they are on
//May be the wrong way to impelement, more of a C++ thing than a react one


var user = "nixin72";
var currentChannel = 'general';

function setChannelName(input){
    currentChannel = input;
}
function returnChannelName(){
    return currentChannel;
}


function setUserName(input){
    user = input;
}

function getUserName(){
    return user;
}

export default setChannelName;