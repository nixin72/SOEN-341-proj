import React from 'react';
import ReactDOM from 'react-dom';
import login from '../lib/login.js'
import newUser from "../lib/newUser.js"




export default function User(input) {
    this.userName = input;
  }


export function userLogin(){
    login();
}


export function userCreation(){
    newUser();
}



