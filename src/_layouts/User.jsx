import React from 'react';
import ReactDOM from 'react-dom';
import login from '../lib/login.js'
import newUser from "../lib/newUser.js"
import sendUser  from "../lib/sendUser.js"



export default function User(input) {
  var userName;
    if(input == null){
      return;
    }
    else{
      userName = input;
    }
   
  }

export function getUser(){
  const userName = "1";
  return userName;
}

//functions to login and create account

export function Login(){
let username = prompt("Please enter your username");
let password = prompt("Please enter your password");
sendUser(username, password, login, loginCall(reponse));

}

export function createAccount(){
  let username = prompt("Please enter your new username");
  let password = prompt("Please enter your new password");
  sendUser(username, password, create, accountCall(response));
}


////need callbacks for asyc calling

function loginCall(response){

}

function accountCall(response){

}
