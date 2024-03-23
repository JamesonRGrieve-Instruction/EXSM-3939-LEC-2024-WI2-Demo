import React, { useState } from "react";
export default function CountTracker() {
  const [count, setCount] = useState(0);
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
