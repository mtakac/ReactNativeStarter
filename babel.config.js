module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~assets': './src/assets',
          '~graphql': './src/graphql',
          '~models': './src/models',
          '~modules': './src/modules',
          '~redux': './src/redux',
          '~theme': './src/theme',
        },
      },
    ],
  ],
};
