import React, { useState } from 'react';
import styles from "./fields.module.css";
export default function StatefulTextArea() {
  const [inputValue, setInputValue] = useState("");

  return <div className={styles.field}>
    <textarea onChange={(e) => {
      console.log("New Value: ", e.target.value);
      setInputValue(e.target.value);
    }} value={inputValue}></textarea>
  </div>;

}
