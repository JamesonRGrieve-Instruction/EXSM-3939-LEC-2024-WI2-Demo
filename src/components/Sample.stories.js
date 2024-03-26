import React from 'react';
import SampleComponent from './Sample';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

// Default export with title
export default {
  title: 'Sample/Sample',
  component: SampleComponent,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    bodyText: { control: 'text' },
    buttonText: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'A Sample Component For Learning Storybook',
    docs: {
      description: {
        component: 'This is a component purely for demonstrative purposes. It has a few string props, nothing crazy, just a sandbox for learning how this all works.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};

// Named export for each story
export const Sample = (args) => <SampleComponent {...args} />;

// Default values for props
Sample.args = {
  heading: 'Sample Component',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  buttonText: 'Click Me!',
};
