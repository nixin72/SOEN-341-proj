import ReactDOM from 'react-dom';
import User from '../_layouts/Channel.jsx'
import React from 'react';

const axios = require('axios');

function newUser() {
   //will come back to make a nicer popup 
    let username = prompt("Please enter your new username");
    let password = prompt("Please enter your password");

    let output = checkUserexist(username);
    
    if(output== false){
        alert("username is unique");
        //creates local user to pass to messages when sent
        makePostRequest(username,password);
    }
    else{
       alert("username in use please try again");  
    }

}
export default newUser;


async function makePostRequest(user,pass){
    //takes in values to add to the userjson file

    axios.post("http://localhost:3001/users", {
    userName : user,
    lastName : pass
  }).then(data => console.log("received"));

}


// cant do the iteration thing as before


async function checkUserexist(user){
    //function is used to see if there is a user already saved in database
    //if it returns one it will just return true
    //if not if will return false and allow user to create account
    let output = true;
    axios.get('http://localhost:3001/users/' + user)
    .then((response) => {
        output = true;
        return output;
    }, (error) => {
        output = false;
        return output;
    });

    return output;
}