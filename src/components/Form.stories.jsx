import React from 'react';
import FormComponent from './Form';

// Default export with title
export default {
  title: 'Sample/Form',
  component: FormComponent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    componentSubtitle: 'A Form Component For Rendering Forms',
  },
};

// Named export for each story
export const Form = (args) => <FormComponent {...args} />;

// Default values for props
Form.args = {
  formFields: [
    {
      name: 'first-name',
      label: 'First Name',
      type: 'text',
    },
  ],
  submitLabel: 'Submit',
  submitFn: () => {
    console.log('Submitted!');
  },
};
