import React, { useState, useEffect } from 'react';
import InputFieldComponent from './InputField';
import { action } from '@storybook/addon-actions';

// Default export with title
export default {
  title: 'Assignment/InputField',
  component: InputFieldComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    componentSubtitle: 'An Input',
    docs: {
      description: {
        component: 'This is a component that will serve as a text field with state.',
      },
    },
  },
};

// Named export for each story
export const InputField = (args) => {
  const [inputValue, setInputValue] = useState(args.argValue);
  useEffect(() => {
    setInputValue(args.argValue);
  }, [args.argValue]);
  return (
    <InputFieldComponent
      value={inputValue}
      onChange={(event) => {
        setInputValue(event.target.value);
        args.onChange(event);
      }}
      validate={args.validate}
    />
  );
};
InputField.args = {
  argValue: 'Some text...',
  onChange: action('Input Text Changed'),
  validate: action('Performing Validation'),
};
