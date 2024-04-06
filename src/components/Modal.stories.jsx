import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import ModalComponent from './Modal';
import { action } from '@storybook/addon-actions';

// Default export with title
export default {
  title: 'Assignment/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  argTypes: {
    cancelFunctionKey: { control: 'radio', options: ['logClicked', 'logEvent'] },
    confirmFunctionKey: { control: 'radio', options: ['logClicked', 'logEvent'] },
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
export const Modal = (args) => {
  return (
    <ModalComponent
      onConfirm={(event) => {
        args.onConfirm(event);
        onClickFunctions[args.confirmFunctionKey](event);
      }}
      onCancel={(event) => {
        args.onCancel(event);
        onClickFunctions[args.cancelFunctionKey](event);
      }}
    >
      {args.children}
    </ModalComponent>
  );
};
// Default values for props
Modal.args = {
  onConfirm: action('Confirmed'),
  confirmFunctionKey: 'logClicked',
  onCancel: action('Cancelled'),
  cancelFunctionKey: 'logClicked',
  children: <p>This is a very fun modal, isn&apos;t it?</p>,
};
