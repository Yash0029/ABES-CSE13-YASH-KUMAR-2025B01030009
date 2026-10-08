import React, { useState } from "react";

function UseReactState() {
  const [counter, setCounter] = useState(0);

  function increaseValue() {
    setCounter(counter + 5);
  }

  function decreaseValue() {
    setCounter(counter - 5);
  }

  return (
    <>
      <div>UseReactState</div>

      <h2 style={{ color: "green"  }}>UseReactState</h2>

      <h2 style={{ color: "red" }}>Counter = {counter}</h2>

      <button onClick={increaseValue}>Increase</button>

      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default UseReactState;