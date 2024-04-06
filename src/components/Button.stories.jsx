import React from 'react';
import ButtonComponent from './Button';
import { action } from '@storybook/addon-actions';
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
  return <ButtonComponent {...args} />;
};

// Default values for props
Button.args = {
  disabled: false,
  label: 'Click Me!',
  onClick: action('Button Click'),
};
