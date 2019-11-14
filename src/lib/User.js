const axios = require('axios');
let globalUser = "default";


export function User(input) {
 globalUser = input;
 alert("global user is now set to: " + globalUser);
}


export default function getUser(){
  return globalUser;
}


 export function Login(){
  const username = prompt("Please enter your username");
  const password = prompt("Please enter your password");
  loginRequest(username,password);
 }



export function createAccount(){
  const user = prompt("Please enter your new username");
  const pass = prompt("Please enter your new password");
  accountRequest(user, pass);
}


function accountRequest(user,pass){
  axios.post("http://localhost:3001/users",{
    username: user,
    password: pass
  }).then( data => alert("account has been created, please press login to use newly created account"))
 }


function loginRequest(user,pass){
  axios.post("http://localhost:3001/users/login",{
    username: user,
    password: pass
  }).then(data => {
      alert("Password is valid");
      User(user); //setting username
  }).catch(err => alert("Please enter a valid password"));
 }



