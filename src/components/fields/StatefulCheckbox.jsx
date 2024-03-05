import React, { useState } from 'react';
export default function StatefulCheckbox() {
  const [inputValue, setInputValue] = useState(true);

  return <div>
    <input id="example-checkbox" type="checkbox" checked={inputValue} onChange={(e) => {
      console.log("New Value", e.target.checked);
      setInputValue(e.target.checked);
    }} />
    <label htmlFor="example-checkbox">Example Checkbox</label>
  </div>;

}
