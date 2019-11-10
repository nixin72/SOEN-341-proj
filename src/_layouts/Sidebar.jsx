import React from 'react';
import newChannel from '../lib/newChannel.js'
import {userLogin,userCreation}  from  './User.jsx'

//only importing user here to control both login
//and create account

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button onClick={userCreation}>  Add new account </button>
      <button onClick={userLogin}>  Login </button>
      <button onClick={newChannel}>  Create a new Channel </button>
      <div id="channelButtons">
      </div>
    </div>
  )
}


