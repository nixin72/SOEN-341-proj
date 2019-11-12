import React from 'react';
import newChannel from '../lib/newChannel.js'
import {Login,createAccount}  from  './User.jsx'

//only importing user here to control both login
//and create account

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button onClick={createAccount}>  Add new account </button>
      <button onClick={Login}>  Login </button>
      <button onClick={newChannel}>  Create a new Channel </button>
      <div id="channelButtons">
      </div>
    </div>
  )
}


