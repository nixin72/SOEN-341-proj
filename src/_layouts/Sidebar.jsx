import React from 'react';
import newChannel from '../lib/newChannel.js'
import login from '../lib/login.js'
import newUser from '../lib/newUser.js'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button onClick={newUser}>  Add account </button>
      <button onClick={login}>  Login </button>
      <button onClick={newChannel}>  Create a new Channel </button>
      <div id="channelButtons">
      </div>
    </div>
  )
}


