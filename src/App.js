import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incre}>+</button>

      <button onClick={decre}>-</button>
    </div>
  );
};

export default App;
