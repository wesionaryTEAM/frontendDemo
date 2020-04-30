module.exports = {
  stories: ['../packages/project1/src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
webpackFinal: async config => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
},
};
