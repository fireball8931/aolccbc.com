const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Read the CSV file
fs.createReadStream(path.join(__dirname, 'aolccbc.com', 'static', 'programlisting.csv'))
 .pipe(csv())
 .on('data', async (row) => {
   const jsonFileName = row.json_file;
   const jsonFilePath = path.join(__dirname, 'static', 'data', jsonFileName);
   const jsonData = await fs.promises.readFile(jsonFilePath, 'utf-8');
   row.json_data = JSON.parse(jsonData);
   const newpagefn = ``
   fs.copyFile('./src/programs/template.html', )
   // create a copy of ./src/programs/template.html and name it `${row.json_file}.html`\
   // in the new html file, change the contents of line 7 to be `{"title": "${row.'Name of Program'}"}`
   // in the new html file, change the contents of line 15 to be the value of row
   
   console.log(row);
 })
 .on('end', () => {
   console.log('CSV file successfully processed.');
 });