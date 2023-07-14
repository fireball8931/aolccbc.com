const csvtojson = require('csvtojson');
const csvToMarkdown = require('csv-to-markdown-table');
const fs = require('fs');
const path = require('path');

// specify your csv file path
const csvFilePath = './static/programlisting.csv';
const outFile = './src/components/programtable.htm'

csvtojson()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const convertedData = jsonObj.map(item => {
      return {
        "Program Name": item.NameofProgram,
        "@ 25 hours a week": `${Math.ceil(item.Hours / 25)} weeks`,
        "Cost": `$${parseFloat(item.Tuition).toLocaleString()}`,
        "Syllabus": `<a href='https://smorgs.aolccbc.com/${item.SMORG}'>Info Sheet</a>`,
      }
    });

    const htmlTable = generateHtmlTable(convertedData);

    // Write output to HTML file
    fs.writeFileSync(path.resolve(__dirname, outFile), htmlTable, 'utf8');

    console.log("HTML Table created successfully!");
  });

// Function to generate HTML table from json data
function generateHtmlTable(data) {
  let html = '<table>\n';

  // Write table headers
  const headers = Object.keys(data[0]);
  html += '<tr>\n' + headers.map(header => `<th>${header}</th>`).join('\n') + '\n</tr>\n';

  // Write table rows
  data.forEach(row => {
    html += '<tr>\n' + Object.values(row).map(value => `<td>${value}</td>`).join('\n') + '\n</tr>\n';
  });

  html += '</table>';

  return html;
}
