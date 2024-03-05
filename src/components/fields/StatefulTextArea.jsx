import React, { useState } from 'react';
export default function StatefulTextArea() {
  const [inputValue, setInputValue] = useState("");

  return <div>
    <textarea onChange={(e) => {
      console.log("New Value: ", e.target.value);
      setInputValue(e.target.value);
    }} value={inputValue}></textarea>
  </div>;

}
