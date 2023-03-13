import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [errMessage, setErrMessage] = useState('')

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1)
      setErrMessage(' ')
    }
  }
  const decrementCount = () => count <= 0 ? setErrMessage('The counter can not go below zero') : setCount(count - 1)

  return (
    <div className="app-container" data-test="component-app">
      <div>

        <h1 data-test="counter-display">
          The counter is currently &nbsp;
      <span data-test='count'>{count}</span>
        </h1>
        <button
          data-test='increment-button'
          onClick={incrementCount}
        >
          Increment counter
    </button>
        <button
          data-test='decrement-button'
          onClick={decrementCount}
        >
          decrement counter
    </button>

        <h2 data-test='error-message'>{errMessage}</h2>
      </div>
    </div>
  );
}

export default App;
