import React, { useState, useRef } from "react";
export default function StatefulInput() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        ref={inputRef}
      ></input>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Set Focus
      </button>
    </>
  );
}
