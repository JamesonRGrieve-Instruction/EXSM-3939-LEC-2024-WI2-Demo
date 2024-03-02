import { useState, useEffect } from 'react';
export default function SimpleInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Effects are the counterpart to setting state, setting state is a cause and an effect is... an effect.
  useEffect(() => {
    // The function in the first argument of the effect runs whenever its dependencies update.
    console.log("Component Loaded!");
    // The return of the function runs as cleanup after the main body is done (excepting empty array).
    return () => {
      console.log("Return!");
    }
  },
    // No dependency array means the effect will listen to ANY rerender of the component - any state change.
    // An empty dependency array means the effect will listen ONLY to the component mounting on the page.
    // A populated dependency array denotes specific state members to which will be listened.
    // If multiple items, the effect will fire when ANY of them update.
    []);
  return <div>
    <input id="firstName" type="text" value={firstName} onChange={(e) => {
      console.log("Form Value: ", e.target.value);
      setFirstName(e.target.value);
    }} placeholder="Enter first name..." />
    <input id="lastName" type="text" value={lastName} onChange={(e) => {
      console.log("Form Value: ", e.target.value);
      setLastName(e.target.value);
    }} placeholder="Enter last name..." />
  </div>;
}
