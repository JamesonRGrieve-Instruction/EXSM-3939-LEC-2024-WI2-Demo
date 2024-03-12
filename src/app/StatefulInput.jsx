import React, { useState, useRef } from "react";
export default function StatefulInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <input
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
      }}
    ></input>
  );
}
