import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    if (newCount < 0) {
      return alert("No more Decrease Please press increase button");
    } else {
      setCount(newCount);
    }
  };

  return (
    <>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </>
  );
}


export default App;
