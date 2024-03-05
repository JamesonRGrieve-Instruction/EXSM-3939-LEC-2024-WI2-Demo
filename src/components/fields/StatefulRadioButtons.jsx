import React, { useState } from 'react';
export default function StatefulRadioButtons() {
  const [inputValue, setInputValue] = useState(1);
  function handleRadioClick(event) {
    const newValue = Number(event.target.id.replace("example-radio-", ""));
    console.log("New Value: ", newValue);
    setInputValue(newValue)
  }
  return <div>
    {
      [1, 2, 3].map((number) => <div key={"example-radio-" + number}>
        <input id={"example-radio-" + number} name="example-radio" type="radio" checked={inputValue === number} onChange={handleRadioClick} />
        <label htmlFor={"example-radio-" + number}>Example Radio {number}</label>
      </div>)
    }
  </div>;

}
