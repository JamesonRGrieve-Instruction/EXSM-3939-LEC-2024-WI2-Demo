import { useState, useEffect } from 'react';
export default function SimpleInput() {
  // State serves a similar function to object properties - they are variables for which the component is self-responsible.
  // They are most often declared in destructured array notation with the variable name first, then the setter function.
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: ""
  });

  // Effects are the counterpart to setting state, setting state is a cause and an effect is... an effect.
  useEffect(() => {
    // The function in the first argument of the effect runs whenever its dependencies update.
    console.log("Component Loaded!");
    console.log(formValues);
    // The return of the function runs as cleanup after the main body is done (excepting empty array).

  },
    // No dependency array means the effect will listen to ANY rerender of the component - any state change.
    // An empty dependency array means the effect will listen ONLY to the component mounting on the page.
    // A populated dependency array denotes specific state members to which will be listened.
    // If multiple items, the effect will fire when ANY of them update.
    [formValues]);
  return <div>
    <input id="firstName" type="text" value={formValues.firstName} onChange={(e) => {
      console.log("Form Value: ", e.target.value);
      // When using objects as state, you must ensure to use the spread operator to persist non-mutating properties.
      // If you do not and attempt to pass a new object as on the next line, you will replace the object completely and
      // erase any other properties which causes a bunch of problems.
      //setFormValues({ firstName: e.target.value })
      setFormValues((currentState) => ({ ...currentState, firstName: e.target.value }));
    }} placeholder="Enter first name..." />
    <input id="lastName" type="text" value={formValues.lastName} onChange={(e) => {
      console.log("Form Value: ", e.target.value);
      //setFormValues({ lastName: e.target.value })
      setFormValues((currentState) => ({ ...currentState, lastName: e.target.value }));
    }} placeholder="Enter last name..." />
  </div>;

}
