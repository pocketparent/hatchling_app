// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add this to resolve the Babel plugin issue
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    '@babel/plugin-proposal-optional-chaining': require.resolve('@babel/plugin-proposal-optional-chaining')
  }
};

module.exports = config;
