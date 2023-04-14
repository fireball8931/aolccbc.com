const fs = require('fs');
const path = require('path');

const folderPath = './js/programs';
const outputFile = './js/programs_js.js';

// Get all js files in folder
const jsFiles = fs.readdirSync(folderPath).filter(file => path.extname(file) === '.js');

// Concatenate all js files into a single string
const compiledCode = jsFiles.reduce((acc, file) => {
  const filePath = path.join(folderPath, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return acc + fileContent;
}, '');

// Write compiled code to output file
fs.writeFileSync(outputFile, compiledCode);

console.log(`Successfully compiled ${jsFiles.length} files into ${outputFile}`);