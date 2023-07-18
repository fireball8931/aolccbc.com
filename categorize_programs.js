const XLSX = require('xlsx');
const axios = require('axios');

// Read the xlsx file
const workbook = XLSX.readFile('./static/programlisting.xlsx');
const worksheet = workbook.Sheets['programlisting']; // Specify the sheet name here

// Define the predefined list of categories
const categories = ['Accounting','Community Support Services','Business','IT','English','Graphic Design and Coding','Marketing','Healthcare'];

// Loop through each row in the worksheet
for (let i = 2; i <= worksheet['!ref'].split(':')[1]; i++) {
 // Get the program content from the cell
 const programContent = worksheet[`A${i}`].v;

 // Ask ChatGPT to categorize the program content
 axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
   prompt: `Categorize the program content: ${programContent} based off this list of categories ${categories}`,
   max_tokens: 1,
   temperature: 0.8,
   n: 1,
   stop: '\n'
 }, {
   headers: {
     'Authorization': 'Bearer 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',
     'Content-Type': 'application/json'
   }
 })
 .then(response => {
   // Get the category from the response
   const category = response.data.choices[0].text.trim();

   // Find the cell to replace with the category
//    const cellToReplace = `F${i}`;

   // Replace the cell value with the category
   console.log(`${programContent} should be ${category}`)
//    worksheet[cellToReplace] = { v: category };
 })
 .catch(error => {
   console.error(error);
 });
}

// Save the modified workbook
XLSX.writeFile(workbook, './static/programlisting_updated.xlsx');
