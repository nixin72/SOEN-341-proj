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
    }
    else{
        alert("password is invaild please try again");
    }

    ///////////////////////
    //implement global users?
    //so client side knows who is sending messages 
    //////////////////////


}

export default login;


//for the moment just doing a get users check 
async function makeGetRequest(){


    let res = await axios.get('http://localhost:3000/users/');
    let data = res.data;
    console.log(data)

    return res;
}


function checkUserPass(user,pass){

    //makeGetRequest returns an json object that we can iterate through
    let users = makeGetRequest();
    let out = false;
    for (var i = 0; i < user.length; i++){
        //looking for the uservalue saved in the file
        if (users[i].username == user && users[i].password == pass){
           out = true;
        }
      }

return out;
}