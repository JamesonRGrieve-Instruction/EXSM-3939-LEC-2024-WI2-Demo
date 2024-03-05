import React, { useState } from 'react';
import styles from "./fields.module.css";
export default function StatefulInput() {
  const [inputValue, setInputValue] = useState("");

  return <div className={styles.field}>
    <input type="text" value={inputValue} onChange={(e) => {
      console.log("New Value: ", e.target.value);
      setInputValue(e.target.value);
    }} placeholder="Enter a value..." />
  </div>;

}
