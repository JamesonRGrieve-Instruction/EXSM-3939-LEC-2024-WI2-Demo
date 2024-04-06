import React from 'react';
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import ModalComponent from './Modal';
import { action } from '@storybook/addon-actions';

// Default export with title
export default {
  title: 'Assignment/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
  /*
  argTypes: {
    heading: { control: 'text' },
    bodyText: { control: 'text' },
    buttonText: { control: 'text' },
    functionKey: { control: 'radio', options: ['logClicked', 'logEvent'] },
  },
  */
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
/*
const onClickFunctions = {
  logEvent: (event) => console.log(event),
  logClicked: () => console.log('Clicked!'),
};
*/
// Named export for each story
export const Modal = (args) => <ModalComponent {...args} />;

// Default values for props
Modal.args = {
  onConfirm: action('Confirmed'),
  onCancel: action('Cancelled'),
  children: <p>This is a very fun modal, isn&apos;t it?</p>,
};
