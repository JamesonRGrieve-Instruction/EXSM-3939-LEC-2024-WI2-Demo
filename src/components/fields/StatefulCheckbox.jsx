import React, { useState } from 'react';
import styles from "./fields.module.css";
export default function StatefulCheckbox() {
  const [inputValue, setInputValue] = useState(true);

  return <div className={styles.field}>
    <div>
      <input id="example-checkbox" type="checkbox" checked={inputValue} onChange={(e) => {
        console.log("New Value", e.target.checked);
        setInputValue(e.target.checked);
      }} />
      <label htmlFor="example-checkbox">Example Checkbox</label>
    </div>
  </div>;

}
