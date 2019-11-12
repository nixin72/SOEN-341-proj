import axios from "axios";

//file for the axios call for sending user 
//checks for password or existance happen server side
//tag == "login" for logging in
//tag == "create" for creating account


//looked into callback functions to get data out of 
//asyncronus calls depending on login or create acount deals differently


export default function sendUser(username, password, tag, callback){
axios.post("http://localhost:3001/users", {
    username : user,
    password : pass,
    tag : tag
  }).then(response=> {
      callback(response.data.user);
      console.log(response.data.user);
  })
}