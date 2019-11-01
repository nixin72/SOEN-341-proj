

//this is the setup for the global current channel var
//this way the user will always know which channel they are on
//May be the wrong way to impelement, more of a C++ thing than a react one


var currentChannel = 'empty';

function setName(input){
    currentChannel = input;
    return currentChannel;
}

function returnName(){

    return currentChannel;
}

export default currentChannel;