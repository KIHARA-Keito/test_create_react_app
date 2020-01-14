import React from 'react';
import Btn from './Btn';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App_container">
      <h1 className="App_title">hello world</h1>
      <Btn>ボタン1</Btn>
      <Btn>ボタン2</Btn>
      <Btn>ボタン3</Btn>
      <Clock seconds="100" />
    </div>
  );
}

export default App;
