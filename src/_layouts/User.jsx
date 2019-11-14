
const axios = require('axios');


///basic setup for setting up client user
let globalUser = "default";

export default function User(input) {
 globalUser = input;

}
export function getUser(){

  return globalUser;
}



///login function

 export function Login(){

  let username = prompt("Please enter your username");
  let password = prompt("Please enter your password");

  //let output = 
  loginRequest(username,password);

  //following layout seen in get messages
  
  //output.then(response => {
  //  if (response.pass == "success"){
  //    alert("is correct");
      //setting the current username
  //    User(username);
  //  }
  //  else(
  //    alert("password or username was incorrect please try agin")
  //  )
  //})
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
  }).then( data => alert(data.data.pass))
 }




///need callbacks for asyc calling?
///was reading info on this and needs to be called
///inside sensitivty list

function loginRequest(user,pass){
 axios.post("http://localhost:3001/users/login",{
    username: user,
    password: pass
  }).then( data => alert(data.data.pass))
 }




