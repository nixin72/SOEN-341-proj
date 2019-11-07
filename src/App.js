import React from 'react';
import Chat from './_layouts/Chat';
import Sidebar from './_layouts/Sidebar';
import Pins from './_layouts/Pins';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
      <div id="pins">
        <Pins channel="1" />
      </div>
    </div>
  );
}

export default App;
