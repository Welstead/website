import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/Counter';
import MyName from './components/MyName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyName name='edward' surname='welstead' />
        <ButtonCounter />
      </header>
    </div>
  );
}

export default App;
