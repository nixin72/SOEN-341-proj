import React from 'react';
import ReactDOM from 'react-dom';
import login from '../lib/login.js'
import newUser from "../lib/newUser.js"




export default function User(input) {
    this.userName = input;
  }


///////
//here errors need to be thrown if null
///////

export function userLogin(){
    User(login());
}


export function userCreation(){
   User(newUser());
}



