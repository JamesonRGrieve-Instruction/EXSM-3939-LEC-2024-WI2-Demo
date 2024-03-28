import React, { useState, useEffect } from 'react';
import CheckboxComponent from './Checkbox';

// Default export with title
export default {
  title: 'Sample/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    componentSubtitle: 'A Checkbox Component For Fields',
  },
};

// Named export for each story
export const Checkbox = (args) => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <CheckboxComponent
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
      checked={checked}
    />
  );
};

// Default values for props
Checkbox.args = {
  checked: false,
};
