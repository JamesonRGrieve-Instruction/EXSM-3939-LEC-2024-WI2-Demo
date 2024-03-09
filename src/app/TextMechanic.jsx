import React, { useState, useMemo } from 'react';
import styles from "./page.module.css";
import { useCallback } from 'react/cjs/react.production.min';
export default function TextMechanic() {
  const [inputValue, setInputValue] = useState("");
  const [showHeading, setShowHeading] = useState(true);
  const [charInputValue, setCharInputValue] = useState("");
  // useMemo stores a value (typically a constant) in memory. Similar to useEffect, useMemo has a dependency array - when any dependency changes, 
  // the value will be recalculated. If the array is empty it will be memoized for the lifespan of the component.
  const controls = useMemo(() => ({
    "Toggle Heading": () => {
      setShowHeading(old => !old);
    },
    "Sort Lines": () => {
      setInputValue(old => old.split("\n").sort().join("\n"));
    },
    "Number Lines": () => {
      setInputValue(old => old.split("\n").map((line, index) => `${index + 1}. ${line}`).join("\n"));
    },
    "Un-Number Lines": () => {
      setInputValue(old => old.split("\n").map((line) => (!isNaN(line[0]) && line[1] === "." && line[2] === " ") ? line.substring(3) : line).join("\n"));
    },
    "Remove Empty Lines": () => {
      setInputValue(old => old.split("\n").filter(line => line.trim() !== "").join("\n"));
    },
    "To Uppercase": () => {
      setInputValue(old => old.toUpperCase());
    },
    "To Lowercase": () => {
      setInputValue(old => old.toLowerCase());
    },
    "Cipher Up": () => {
      setInputValue(old => old.split('').map(char => char.match(/^[a-zA-Z]+$/i) ? (String.fromCharCode([90, 122].includes(char.charCodeAt(0)) ? char.charCodeAt(0) - 25 : char.charCodeAt(0) + 1)) : char).join(""));
    },
    "Cipher Down": () => {
      setInputValue(old => old.split('').map(char => char.match(/^[a-zA-Z]+$/i) ? (String.fromCharCode([65, 97].includes(char.charCodeAt(0)) ? char.charCodeAt(0) + 25 : char.charCodeAt(0) - 1)) : char).join(""));
    }
  }), []);

  // useCallback works identically to useMemo, just with functions instead of values.
  // In this case, the function could've just been ejected from the component as it does not reference state.
  // I kept it in with an empty array as a demo of syntax.
  const objectMap = useCallback((object, fn) => {
    return Object.keys(object).map(key => fn(key, object[key]));
  }, [])

  return <div className={styles.field}>
    {showHeading ? <h1>Text Mechanic</h1> : null}
    <textarea onChange={(e) => {
      console.log("New Value: ", e.target.value);
      setInputValue(e.target.value);
    }} value={inputValue}></textarea>
    <div className={styles.control}>
      {objectMap(controls, (label, controlFunction) => <button key={label} onClick={(e) => { e.preventDefault(); controlFunction(); setCharInputValue(old => old + e.target.innerText[0]) }}>{label}</button>)}
    </div>
    <input type="text" value={charInputValue} disabled />
  </div>;
}
