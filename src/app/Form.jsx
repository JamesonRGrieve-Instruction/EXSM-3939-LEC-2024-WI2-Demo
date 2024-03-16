import React, { useEffect, useState } from "react";
export default function Form({ formFields, submitLabel, submitFn }) {
  /*
    formFields = [
        {
            name: string;
            label: string;
            type: text | password | email;
        }
    ]

    */

  const [fieldValues, setFieldValues] = useState(
    formFields.reduce((obj, field) => {
      obj[field.name] = "";
      return obj;
    }, {})
  );
  // First Iteration: {} => {name: ""}
  // Second Iteration: {name: ""} => {name: "", label: ""}
  // Third Iteration: {name: "", label: ""} => {name: "", label: "", type: ""}
  useEffect(() => {
    console.log(fieldValues);
  }, [fieldValues]);
  return (
    <form>
      {formFields.map((field) => (
        <div key={`${field.name}`}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            value={fieldValues[field.name]}
            onChange={(event) => {
              setFieldValues((previous) => ({
                ...previous,
                [field.name]: event.target.value,
              }));
            }}
            type={field.type}
          />
        </div>
      ))}
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          submitFn(fieldValues);
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
