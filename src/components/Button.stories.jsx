import React, { useState, useEffect } from 'react';
import ButtonComponent from './Button';

// Default export with title
export default {
  title: 'Assignment/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    componentSubtitle: 'A Button Component For Fields',
  },
};

// Named export for each story
export const Button = (args) => {
  const [checked, setChecked] = useState(args.checked);
  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return (
    <ButtonComponent
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
      checked={checked}
    />
  );
};

// Default values for props
Button.args = {
  checked: false,
};
