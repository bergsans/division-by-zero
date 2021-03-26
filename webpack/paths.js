const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'assets/images',
  audioFolder: 'assets/audio',
  fontsFolder: 'assets/fonts',
  cssFolder: 'assets/styles',
  jsFolder: 'js',
};
