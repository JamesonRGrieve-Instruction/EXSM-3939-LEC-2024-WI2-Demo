import React, { useContext } from "react";
// In order to useContext, we must import the context we created higher in the hierarchy.
import { ExampleContext } from "./page";
export default function Paragraph({ text }) {
  // You can use useContext() directly in the JSX, but it will not like it if it is conditionally rendered, or if it is used multiple times. Therefore, typically best to assign it to a constant.
  const contextValue = useContext(ExampleContext);
  return (
    <div>
      <p>
        {/* To get the value of a state-driven context, reference whatever key of the context object to which you assigned the state value reference. */}
        {text}Context: {contextValue.data}
      </p>
      <button
        onClick={() => {
          // To change the value of a state-driven context, call the key of the context object to which you assigned the setState function (in the exact same way you would call said setState function).
          contextValue.mutate((previous) => previous + "!");
        }}
      >
        Add Emphasis
      </button>
    </div>
  );
}
