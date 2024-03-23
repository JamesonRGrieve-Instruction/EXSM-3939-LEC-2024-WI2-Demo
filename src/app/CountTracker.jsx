import React, { useState, useEffect } from "react";
const multiples = {
  3: "Fizz",
  5: "Buzz",
};
export default function CountTracker() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let output = "";
    for (const multiple in multiples) {
      if (count % multiple == 0) {
        output += multiples[multiple];
      }
    }
    if (output) {
      console.log(output);
    }
  }, [count]);
  useEffect(() => {
    console.log("Component Mounted!");
    return () => {
      console.log("Component Unmounted!");
    };
  }, []);
  return (
    <>
      <button onClick={() => setCount((previous) => previous + 1)}>+</button>
      <button onClick={() => setCount((previous) => previous - 1)}>-</button>
      <input
        type="number"
        value={count}
        onChange={(event) => setCount(Number(event.target.value))}
      />
    </>
  );
}
