"use client";
import React from "react";
import Paragraph from "./Paragraph";
import Form from "./Form";
const displayFields = [
  { name: "email", label: "E-Mail", type: "text" },
  { name: "password", label: "Password", type: "password" },
];
const additionFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "label", label: "Label", type: "text" },
  { name: "type", label: "Type", type: "text" },
];
export default function Home() {
  return (
    <main>
      <Paragraph text="Hello, World!" />
      <Form formFields={displayFields} />
      <Form
        formFields={additionFields}
        submitLabel="Add Field"
        submitFn={() => {
          console.log("Submit was clicked!");
        }}
      />
    </main>
  );
}
