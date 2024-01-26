export default {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  staticDirs: ['../assets'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true
  },
};
