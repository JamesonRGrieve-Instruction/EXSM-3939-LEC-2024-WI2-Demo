"use client";
import React, { useState } from "react";
import Paragraph from "./Paragraph";
import Form from "./Form";
const additionFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "label", label: "Label", type: "text" },
  { name: "type", label: "Type", type: "text" },
];
export default function Home() {
  const [displayFields, setDisplayFields] = useState([
    { name: "email", label: "E-Mail", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ]);
  return (
    <main>
      <Paragraph text="Hello, World!" />
      <Form formFields={displayFields} />
      <Form
        formFields={additionFields}
        submitLabel="Add Field"
        submitFn={(formData) => {
          setDisplayFields((previous) => [...previous, formData]);
        }}
      />
    </main>
  );
}
