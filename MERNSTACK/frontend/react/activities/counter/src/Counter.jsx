import { useState, useEffect } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  function handleCounter() {
    setCount(count + 1);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []); // <- add empty brackets here

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <h1>Count={count}</h1>
      <button onClick={handleCounter}>+1</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
