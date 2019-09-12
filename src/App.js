import React from 'react';
import Chat from './_layouts/Chat';
import Sidebar from './_layouts/Sidebar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
