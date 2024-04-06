import React from 'react';
export default function InputField({ value, onChange, validate }) {
  return <input type='text' value={value} onChange={onChange} onInput={(event) => validate(event.target.value)} />;
}
