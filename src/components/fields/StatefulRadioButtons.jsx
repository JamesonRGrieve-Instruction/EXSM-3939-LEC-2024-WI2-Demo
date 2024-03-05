import React, { useState } from 'react';
export default function StatefulRadioButtons() {
  const [inputValue, setInputValue] = useState(1);
  function handleRadioClick(event) {
    const newValue = Number(event.target.id.replace("example-radio-", ""));
    console.log("New Value: ", newValue);
    setInputValue(newValue)
  }
  return <div>
    <input id="example-radio-1" name="example-radio" type="radio" checked={inputValue === 1} onChange={handleRadioClick} />
    <label htmlFor="example-radio-1">Example Radio 1</label>
    <input id="example-radio-2" name="example-radio" type="radio" checked={inputValue === 2} onChange={handleRadioClick} />
    <label htmlFor="example-radio-2">Example Radio 2</label>
    <input id="example-radio-3" name="example-radio" type="radio" checked={inputValue === 3} onChange={handleRadioClick} />
    <label htmlFor="example-radio-3">Example Radio 3</label>
  </div>;

}
