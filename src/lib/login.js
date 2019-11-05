import ReactDOM from 'react-dom';
import User from '../_layouts/User.jsx'
import React from 'react';



function login() {
    ///will need to come back and make a custom popup with two imports
    ///for the moment this solution will work

    let username = prompt("Please enter your username");
    let password = prompt("Please enter your password");

    /////
    //checks with server side and returns output boolean
    /////

    let output = true;

    if(output == true){
        alert("password is valid");

        //creates local user to pass to messages when sent
        let fresh = new User(username);
        
    }
    else{
        alert("password is invaild please try again");
        
    }

}

export default login;