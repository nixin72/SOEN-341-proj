import ReactDOM from 'react-dom';
import User from '../_layouts/User.jsx'
import React from 'react';

//posting a new user code inspired by axios tutorial on subject

const axios = require('axios');

function login() {
    ///will need to come back and make a custom popup with two imports
    ///for the moment this solution will work

    let username = prompt("Please enter your username");
    let password = prompt("Please enter your password");


    let output = checkUserPass(username,password);

    if(output == true){
        alert("password is valid");
        return username;
        //returns username back to user.jsx so client side knows where it is
    }
    else{
        alert("password or username is invaild please try again");
    }
}

export default login;



function checkUserPass(user,pass){

    axios.get('http://localhost:3001/users/' + user)
    .then((response) => {
        if(response.password == pass){
            return true;
        }
        else{
            return false;
        }
    }, (error) => {
        
        return false;
    });
}