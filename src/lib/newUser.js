import ReactDOM from 'react-dom';
import User from '../_layouts/Channel.jsx'
import React from 'react';



function newUser() {
    ///will need to come back and make a custom popup with two imports
    ///for the moment this solution will work

    let username = prompt("Please enter your new username");
    let password = prompt("Please enter your password");

    /////
    //checks with server side and validates no current username is already used
    /////

    let output = true;

    if(output== true){
        alert("username is unique");

        //creates local user to pass to messages when sent
        let fresh = new User(username);
        
    }
    else{
       alert("username in use");
        
    }

}

export default newUser;