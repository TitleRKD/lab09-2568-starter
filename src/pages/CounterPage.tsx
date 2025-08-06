import { useState } from "react";
export default function CounterPage() {


  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount(count + 1); 
  };
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      <p>Counter: {count}</p>
      {/* เรียกใช้ event  */}
      <button onClick={addCounter}>Increase</button>
    </div>
  );
}
