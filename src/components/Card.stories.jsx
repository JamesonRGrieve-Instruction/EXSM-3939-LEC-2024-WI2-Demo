import React from 'react';
import CardComponent from './Card';

// Default export with title
export default {
  title: 'Assignment/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'A Card Component For Writing Text',
    docs: {
      description: {
        component: 'This is a basic paragraph wrapper that just wraps the `text` prop in a paragraph tag.',
      },
    },
  },
};

// Named export for each story
export const Card = (args) => <CardComponent {...args} />;

// Default values for props
Card.args = {
  title: 'Flowers',
  description: 'Lots of purple flowers.',
  imageSrc: 'https://cdn.pixabay.com/photo/2024/02/15/15/29/crocus-8575610_1280.jpg',
};
