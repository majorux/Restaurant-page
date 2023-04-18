const path = require('path');
const GitignoreBuildWebpackPlugin = require('gitignore-build-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
}; 


plugins: [
        new GitignoreBuildWebpackPlugin()
  ];