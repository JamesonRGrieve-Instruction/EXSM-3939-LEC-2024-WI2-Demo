import React, { useState } from 'react';
export default function StatefulInput() {
  const [inputValue, setInputValue] = useState("");

  return <div>
    <input id="firstName" type="text" value={inputValue} onChange={(e) => {
      console.log("New Value: ", e.target.value);
      setInputValue(e.target.value);
    }} placeholder="Enter a value..." />
  </div>;

}
