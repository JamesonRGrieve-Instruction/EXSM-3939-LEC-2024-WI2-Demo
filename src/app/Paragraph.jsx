import React, { useContext, useState } from "react";
// In order to useContext, we must import the context we created higher in the hierarchy.
import { ExampleContext } from "./page";
export default function Paragraph({ text }) {
  // You can use useContext() directly in the JSX, but it will not like it if it is conditionally rendered, or if it is used multiple times. Therefore, typically best to assign it to a constant.
  const contextValue = useContext(ExampleContext);
  console.log(contextValue.data);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <p>
        {/* To get the value of a state-driven context, reference whatever key of the context object to which you assigned the state value reference. */}
        {text}
      </p>
      <h2>Context:</h2>
      <ul>
        {contextValue.data.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          // To change the value of a state-driven context, call the key of the context object to which you assigned the setState function (in the exact same way you would call said setState function).
          contextValue.mutate((previous) => [
            ...previous,
            { label: inputValue, added: new Date() },
          ]);
        }}
      >
        Add To Context
      </button>
      <button
        onClick={() => {
          // To change the value of a state-driven context, call the key of the context object to which you assigned the setState function (in the exact same way you would call said setState function).
          contextValue.mutate((previous) => [
            ...previous.filter((item) => item.label !== inputValue),
          ]);
        }}
      >
        Remove From Context
      </button>
    </div>
  );
}
