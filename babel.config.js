module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          _root: './',
          _src: './src',
          _components: './src/components',
          _modules: './src/modules',
          _services: './src/services',
          _commons: './src/commons',
          _navigation: './src/navigation',
          _models: './src/models',
          _utils: './src/utils',
          _context: './src/context',
          _hooks: './src/hooks',
        },
      },
    ],
    //keep the order of plugins
    [
      '@babel/plugin-transform-flow-strip-types',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-transform-private-methods',
      {
        loose: true,
      },
    ],
  ],
}
