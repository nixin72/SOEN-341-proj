import ReactDOM from 'react-dom';
import User from '../_layouts/Channel.jsx'
import React from 'react';

const axios = require('axios');

function newUser() {
    ///will need to come back and make a custom popup with two imports
    ///for the moment this solution will work

    let username = prompt("Please enter your new username");
    let password = prompt("Please enter your password");

    /////
    //checks with server side and validates no current username is already used
    /////

    let output = checkUserexist(username);

    if(output== false){
        alert("username is unique");
        //creates local user to pass to messages when sent
        makePostRequest(username,password);
    }
    else{
       alert("username in use");
        
    }

}

export default newUser;


async function makePostRequest(user,pass){
    //takes in values to add to the userjson file

   let params = {
        username : user,
        password : pass
    }

    let res = await axios.post('http://localhost:3000/users/',params);

    console.log(res.data);

}
function checkUserexist(user){

    //makeGetRequest returns an json object that we can iterate through
    let users = makeGetRequest();
    let out = false;
    for (var i = 0; i < user.length; i++){
        //looking for the uservalue saved in the file
        if (users[i].username == user){
           out = true;
        }
      }

return out;
}


async function makeGetRequest(){


    let res = await axios.get('http://localhost:3000/users/');
    let data = res.data;
    console.log(data)

    return data;
}