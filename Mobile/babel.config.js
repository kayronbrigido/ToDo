module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
          '.svg'
        ],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@services': './src/services',
          '@assets': './src/assets',
          '@src': './src'
        },
      }
    ],
  ],
};
