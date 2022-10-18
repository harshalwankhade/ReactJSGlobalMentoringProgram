import { React, useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0);

    //increment counter
    const increment=()=>{
        setCounter(count=>count+1);
    }

    //decrement counter
    const decrement=()=>{
        setCounter(count=> count-1);
    }

    //reset counter
    const resetCounter = () => {
        setCounter(0);
    }
    
  return (
    <div>
    <h1>React Counter</h1>
    <span className="counter__output">Counter value: {counter}</span>
      <p>
        <button className="control__btn" onClick={increment}>++ Increment Counter</button> &nbsp;
        <button className="control__btn" onClick={decrement} >-- Decrement Counter</button>
      </p>
      <button className="reset" onClick={resetCounter} >Reset</button>
  </div>
  )
}
