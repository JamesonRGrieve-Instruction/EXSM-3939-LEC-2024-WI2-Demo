import React from 'react';
import ParagraphComponent from './Paragraph';

// Default export with title
export default {
  title: 'Sample/Paragraph',
  component: ParagraphComponent,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    componentSubtitle: 'A Paragraph Component For Writing Text',
    docs: {
      description: {
        component: 'This is a basic paragraph wrapper that just wraps the `text` prop in a paragraph tag.',
      },
    },
  },
};

// Named export for each story
export const Paragraph = (args) => <ParagraphComponent {...args} />;

// Default values for props
Paragraph.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
