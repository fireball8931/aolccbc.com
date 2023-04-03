const path = require('path');
const { exec } = require('child_process');
const { ESLint } = require('eslint');

async function lintFiles() {
    const eslint = new ESLint({
      // overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
      // ignorePath: path.resolve(__dirname, '.eslintignore'),
      useEslintrc: false,
    });
  
    const results = await eslint.lintFiles(['./www/**/*.js', './www/**/*.html', './www/**/*.css']);
  
    if (results.length > 0) {
      console.log(`ESLint found ${results.length} issues:`);
      console.log(results);
    } else {
      console.log('ESLint found no issues.');
    }
  }

  lintFiles();