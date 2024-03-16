import React, { useEffect, useState } from "react";
export default function Form({ formFields, submitLabel, submitFn }) {
  // In JavaScript, the props you declare do not need to have values provided to them, and no error will result if there is none.
  // Therefore, you MUST ENSURE that your spelling is the same between your definition props list and your component props/attributes list when used.
  /*
    formFields = [
        {
            name: string;
            label: string;
            type: text | password | email;
        }
    ]
  */

  /*
    We have 3 props coming into this component. Any of them, if driven by state that gets updated could cause a rerender of this component.
    We use formFields to render our fields and set up the statefullness thereof. 
    We use submitLabel to determine the text in the submit button.
    We use submitFn to determine what happens when the submit button is clicked.
        We don't care (from the context of this component) what happens when the submit button is clicked.
        Just like we don't care what happens to the value we return from a function.
        All we do is call the callback function with the appropriate arguments, and our job is done.
  */

  const [fieldValues, setFieldValues] = useState(
    formFields.reduce((obj, field) => {
      obj[field.name] = "";
      return obj;
    }, {}),
  );
  /*
  First Iteration: {} => {name: ""}
  Second Iteration: {name: ""} => {name: "", label: ""}
  Third Iteration: {name: "", label: ""} => {name: "", label: "", type: ""}
  This sets up statefullness for all of our form fields, regardless of what they may be.
  They can have any name (so long as it isn't duplicated), any label, any type and they will be rendered
  and stateful just as if they were written manually.
  */

  // This just logs the change to fieldValues so we can make sure everything is working - not required for function.
  useEffect(() => {
    console.log(fieldValues);
  }, [fieldValues]);

  return (
    <form>
      {
        // We map each element in the formFields array into a label and input - the statefulness of the input is tied to the
        // state that we initialized earlier with reduce (ensuring the keys exist and we don't get non-stateful -> stateful errors).
        formFields.map((field) => (
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
        ))
      }
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          // When we click the submit button, we invoke submitFn (a prop).
          // This allows a developer using this component to pass a function into that prop, and have it be called when submit is clicked.
          // We pass back our state that is tracking our form fields so that developer can do what they want with them.
          // Note that an attempt to pass a non-function value to this prop will cause an error when submit is clicked -
          // just like calling a non-function variable/value would (for example trying to call `"Hello, World"()`).
          submitFn(fieldValues);
        }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
