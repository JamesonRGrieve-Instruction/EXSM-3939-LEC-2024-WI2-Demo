import React from 'react';
export default function Checkbox({ checked, onChange }) {
  return <input type='checkbox' checked={checked} onChange={onChange} />;
}
