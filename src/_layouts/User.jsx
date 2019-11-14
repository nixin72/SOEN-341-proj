
const axios = require('axios');


///basic setup for setting up client user
let globalUser = "default";

export function User(input) {
 globalUser = input;

 alert("global user is now set to: " + globalUser);
}

export default function getUser(){
  return globalUser;
}



///login function

 export function Login(){

  let username = prompt("Please enter your username");
  let password = prompt("Please enter your password");

  //let output = 
  loginRequest(username,password);

  
 }


//function to create account 
export function createAccount(){
  let user = prompt("Please enter your new username");
  let pass = prompt("Please enter your new password");
  accountRequest(user, pass);
}




///axios calls to the server


function accountRequest(user,pass){
  axios.post("http://localhost:3001/users",{
    username: user,
    password: pass
  }).then( data => alert("account has been created, please press login to use newly created account"))
 }




///need callbacks for asyc calling?
///was reading info on this and needs to be called
///inside sensitivty list

function loginRequest(user,pass){
 axios.post("http://localhost:3001/users/login",{
    username: user,
    password: pass
  }).then( data =>{

    if(data.data.pass === "success" ){
      alert("Password is valid");
      User(user); //setting username
    }
    else{
      alert("please enter vaild password");
    }
  })
 }



