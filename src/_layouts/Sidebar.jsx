import React from 'react';

import newChannel from '../lib/newChannel.js'
import {Login,createAccount}  from  '../lib/User.js'



export default function Sidebar() {

  return (
    <div className="sidebar">

      <button id="CreateChannelButton" onClick={createAccount}>  Add new account </button>
      <button id="CreateChannelButton" onClick={Login}>  Login </button>
      <button id="CreateChannelButton" onClick={newChannel}>  Create a new Channel </button>

      <div id="channelButtons">
      </div>
    </div>
  )
}
