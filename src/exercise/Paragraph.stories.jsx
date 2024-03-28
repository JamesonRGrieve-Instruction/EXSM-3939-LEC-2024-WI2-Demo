import React from 'react';
import GreeterComponent from './Greeter';

// Default export with title
export default {
  title: 'Sample/Greeter',
  component: GreeterComponent,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    profession: { control: 'text' },
    age: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'A Component that Greets a User',
    docs: {
      description: {
        component: 'This is a basic paragraph that will greet the user by their age and profession.',
      },
    },
  },
};

// Named export for each story
export const Greeter = (args) => <GreeterComponent {...args} />;

// Default values for props
Greeter.args = {
  name: 'John Doe',
  profession: 'Bus Driver',
  age: '50',
};
