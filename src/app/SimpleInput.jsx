import { useState, useEffect } from 'react';
export default function SimpleInput() {
  // State serves a similar function to object properties - they are variables for which the component is self-responsible.
  // They are most often declared in destructured array notation with the variable name first, then the setter function.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Effects are the counterpart to setting state, setting state is a cause and an effect is... an effect.
  useEffect(() => {
    // The function in the first argument of the effect runs whenever its dependencies update.
    console.log("Component Loaded!");
    console.log(firstName, lastName);
    // The return of the function runs as cleanup after the main body is done (excepting empty array).

  },
    // No dependency array means the effect will listen to ANY rerender of the component - any state change.
    // An empty dependency array means the effect will listen ONLY to the component mounting on the page.
    // A populated dependency array denotes specific state members to which will be listened.
    // If multiple items, the effect will fire when ANY of them update.
    [firstName, lastName]);
  return <div>
    <input id="firstName" type="text" value={firstName} onChange={(e) => {
      console.log("Form Value: ", e.target.value);
      const newName = e.target.value;
      setTimeout(() => {
        // When an effect has two dependencies and both are set immediately after one another, the effect should only fire once.
        // In the event you have one update possible at the start of a function, but another update depends on an async request,
        // if you want the effect to fire a single time it makes the most sense to defer ALL state updates until you have the 
        // necessary data ready to do them consecutively.
        console.log("Timeout over", e.target.value);
        setFirstName(newName);
        setLastName(newName);
      }, 1000)
    }} placeholder="Enter first name..." />
  </div>;
}
