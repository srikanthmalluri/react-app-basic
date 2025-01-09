import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <React.Fragment id = "app">
      <div id= "app-js">
    <h1 style={{backgroundColor: 'blueviolet', fontStyle: 'bold'}}>
      Welcome to React Js from APP
    </h1>
    <ul>
     {["srikanth","Malluri","Raj","sai"].map(i=> <li key={i} >{i}</li>)}
    </ul>
    </div>
    </React.Fragment>
  );
}

export default App;
