import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    if (count >= 0) {
      setCount(count + 1)
    }
  }

  return (
    <div data-test="component-app">
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
    </div>
  );
}

export default App;