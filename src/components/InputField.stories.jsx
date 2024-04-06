import React from 'react';
import InputFieldComponent from './InputField';

// Default export with title
export default {
  title: 'Assignment/InputField',
  component: InputFieldComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    componentSubtitle: 'A Input With State',
    docs: {
      description: {
        component: 'This is a component that will serve as a text field with state.',
      },
    },
  },
};

// Named export for each story
export const InputField = () => <InputFieldComponent />;
