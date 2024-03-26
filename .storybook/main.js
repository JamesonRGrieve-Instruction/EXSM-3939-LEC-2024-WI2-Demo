const path = require('path');

const config = {
  stories: ['../src/Application.stories.mdx', '../src/app/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-styling', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: [],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: ['babel-loader', '@mdx-js/loader'],
    });

    if (config.resolve)
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '..'),
      };

    return config;
  },
};
export default config;
