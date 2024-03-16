import React from "react";
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
  return (
    <form>
      {formFields.map((field) => (
        <div key={`${field.name}`}>
          <label htmlFor={field.name}>{field.label}</label>
          <input id={field.name} type={field.type} />
        </div>
      ))}
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          submitFn();
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
