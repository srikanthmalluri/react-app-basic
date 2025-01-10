import logo from './logo.svg';
import './App.css';
import React from 'react'
import App1 from './App1';
import NApp from './NApp';
import ClassComp from './ClassComp';
import CompPure from './CompPure';
import StateChange from './StateClass';
import ServComp from './ServComp'

function App() {
  return (
    <React.Fragment id = "app">
      {/* <div id= "app-js">
    <h1 style={{backgroundColor: 'blueviolet', fontStyle: 'bold'}}>
      Welcome to React Js from APP
    </h1>
    <ul>
     {["srikanth","Malluri","Raj","sai"].map(i=> <li key={i} >{i}</li>)}
    </ul>
    <select style={{backgroundColor: 'black',borderStyle: 'dotted'}}>
      <option>Select one</option>
      <option>Select Two</option>
      <option>Select Three</option>
      <option>Select Four</option>
    </select>
    </div> */}
    {/* <App1></App1>
    <NApp></NApp>
    <ClassComp></ClassComp> */}
    {/* <CompPure></CompPure> */}
    <StateChange></StateChange>
    <ServComp></ServComp>
    </React.Fragment>

  );
}

export default App;
