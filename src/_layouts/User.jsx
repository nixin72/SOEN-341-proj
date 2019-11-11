import React from 'react';
import ReactDOM from 'react-dom';
import login from '../lib/login.js'
import newUser from "../lib/newUser.js"




export default function User(input) {

    if(input == null){
      return;
    }
    else{

      this.userName = input;
    }
   
  }


export function userLogin(){
    User(login());
}


export function userCreation(){
   User(newUser());
}



