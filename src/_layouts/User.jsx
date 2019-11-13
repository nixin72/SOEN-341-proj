
const axios = require('axios');


export default function User(input) {
 
}

//functions to login and create account
//tags "login" and "create" are sent as tags for serverside functions


 export function Login(){

  let username = prompt("Please enter your username");
  let password = prompt("Please enter your password");

  let output = loginRequest(username,password);

  //following layout in get messages
  //but I feel this is just as unsecure as before?
  //the check with password does happen server side 
  //but actual client side login happens here
  output.then(response => {

    alert(response.data.output);

  })
 }

 //im not sure about this implementation following how messages are setup
 //but unsure if the url given matters (userlogin and usercreate) dont acutally exist
 //but on the server side I can create differnece requests for them



 function accountRequest(user,pass ){
  axios.post("http://localhost:3001/users",{
    username: user,
    password: pass
  }).then( data => alert("test"))
 }



export function createAccount(){
  let user = prompt("Please enter your new username");
  let pass = prompt("Please enter your new password");
  accountRequest(user, pass);
}


////need callbacks for asyc calling
function loginRequest(user, pass ){
  return axios.get("http://localhost:3001/userlogin",{
    params:{
    username: user,
    password: pass
  }} )
 }




