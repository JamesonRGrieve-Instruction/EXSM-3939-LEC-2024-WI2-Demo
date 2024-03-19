"use client";
import React, { useState, createContext } from "react";
import Paragraph from "./Paragraph";
import Form from "./Form";
const additionFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "label", label: "Label", type: "text" },
  { name: "type", label: "Type", type: "text" },
];
// When creating context, create it outside the component so that it isn't reinitalized every render and ensure to export it. In JavaScript, it can be an empty argument list (only TypeScript gets upset).
export const ExampleContext = createContext();
export default function Home() {
  const [displayFields, setDisplayFields] = useState([
    { name: "email", label: "E-Mail", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ]);
  // With this context we are providing a way to change the value as well as read the value, so we are binding it to a state.
  const [exampleText, setExampleText] = useState("Hello, World!");
  return (
    // Everything within the provider has access to the provider's value through a useContext() hook.
    // The value prop of the provider sets the initial value of the context, in this case bound to the state via reference.
    <ExampleContext.Provider
      value={{ data: exampleText, mutate: setExampleText }}
      /* value="Hello, World!" */
    >
      <main>
        <Paragraph text="Hello, World!" />

        {/* 
      This form has its fields provided by the displayFields state of the page component.
      As the value of the prop is state, a change to that state will force a component rerender, just like its own state would.
      */}
        <Form formFields={displayFields} />

        {/*
      This form has its fields provided by the additionFields external constant (which should never mutate by the rules of react).
      Its other props are also constants (despite the function referencing state, the function itself is contantly defined).
      This means that the only thing that will cause a rerender of this component is a change to its own state.
      Its constant props will not change and thus not drive rerenders.
      */}
        <Form
          formFields={additionFields}
          submitLabel="Add Field"
          submitFn={(formData) => {
            setDisplayFields((previous) => [...previous, formData]);
          }}
        />
      </main>
    </ExampleContext.Provider>
  );
}
