
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
//tags "login" and "create" are sent as tags for serverside functions

export function Login(){
let username = prompt("Please enter your username");
let password = prompt("Please enter your password");
sendUser(username, password, "login", loginCall());
}


///I think I had callback setup incorrectly changing to remove
///the "response" within it


export function createAccount(){
  let username = prompt("Please enter your new username");
  let password = prompt("Please enter your new password");
  sendUser(username, password, "create", accountCall());
}


////need callbacks for asyc calling

function loginCall(response){

}

function accountCall(response){

}
