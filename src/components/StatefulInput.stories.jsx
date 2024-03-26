import React from 'react';
import StatefulInputComponent from './StatefulInput';

// Default export with title
export default {
  title: 'Sample/StatefulInput',
  component: StatefulInputComponent,
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
export const StatefulInput = () => <StatefulInputComponent />;
