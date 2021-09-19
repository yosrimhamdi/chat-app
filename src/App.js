import React from 'react';

import SideBar from './components/SideBar/SideBar';
import Chat from './components/Chat/Chat';
import './App.scss';

const App = () => (
  <div className="app">
    <SideBar />
    <Chat />
  </div>
);

export default App;
