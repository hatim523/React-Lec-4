import React, {useState} from 'react';
import {Message} from "./Message";
import './App.css';

function App() {
  //using variables in functional componenets
    //first argument is variable name, second argument is setter function for that variable
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true)

  return (
      <div className={isMorning ? "daylight" : "nightlight"}>
        <h1>Day time = {isMorning ? "Morning" : "Night"}</h1>
      <h1>Hello</h1>
        <h3>Value of counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
        <button onClick={() => setMorning(!isMorning)}>Change Time</button>
        <Message count={count}/>
    </div>
  );
}


export default App;
