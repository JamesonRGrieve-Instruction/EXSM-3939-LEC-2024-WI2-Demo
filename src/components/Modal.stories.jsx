import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import ModalComponent from './Modal';

// Default export with title
export default {
  title: 'Assignment/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    bodyText: { control: 'text' },
    buttonText: { control: 'text' },
    functionKey: { control: 'radio', options: ['logClicked', 'logEvent'] },
  },
  parameters: {
    componentSubtitle: 'A Modal Component For Learning Storybook',
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
      toc: {
        title: 'Table of Contents',
      },
    },
  },
};

const onClickFunctions = {
  logEvent: (event) => console.log(event),
  logClicked: () => console.log('Clicked!'),
};

// Named export for each story
export const Modal = (args) => <ModalComponent heading={args.heading} bodyText={args.bodyText} buttonText={args.buttonText} onClick={onClickFunctions[args.functionKey]} />;

// Default values for props
Modal.args = {
  functionKey: 'log',
  heading: 'Modal Component',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  buttonText: 'Click Me!',
};
