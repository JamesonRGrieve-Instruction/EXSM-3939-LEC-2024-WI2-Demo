import { features } from 'process';

const path = require('path');

const config = {
  stories: ['../src/Application.mdx', '../src/app/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: { disableTelemetry: true },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  refs: {
    example: { title: 'JRGComponents', url: 'https://jamesonrgrieve.github.io/jrgcomponents', expanded: false },
  },
  logLevel: 'debug',
  env: (config) => ({ ...config, APP_NAME: 'Example' }),
  staticDirs: [],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve)
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..'),
      };

    return config;
  },
};
export default config;
