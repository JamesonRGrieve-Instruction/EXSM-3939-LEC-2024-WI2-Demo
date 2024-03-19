import Paragraph from "./Paragraph";
import { ExampleContext } from "./page";
import React from "react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Demo Components/Paragraph",
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = (args) => (
  <ExampleContext.Provider value={{ data: args.contextText, mutate: () => {} }}>
    <Paragraph text={args.text} />
  </ExampleContext.Provider>
);
Default.args = {
  text: "Default Text",
  contextText: "Example Context Text",
};
