// Import necessary modules
const fs = require('fs');
const csv = require('csv-parser');


// Initialize variables
let usedCategoryShortNames = '_';
let categoryButtons = '<button class="slidesbtn active" id="all" onclick="filterSelection(\'all\')">All</button>';
let slidesHTML = '';
let programsCount = 0;

// Create the src/programs directory if it does not exist
if (!fs.existsSync('./src/programs')) {
  fs.mkdirSync('./src/programs');
}

// Clear the slides file
const slidesFilePath = './src/components/slides.htm';
fs.writeFileSync(slidesFilePath, '', 'utf8', { flag: 'w' });

// Create a write stream for the slides file
const slidesStream = fs.createWriteStream(slidesFilePath, { flags: 'a' });

// Function to convert a string to a usable URL string
function convertToURLString(str) {
 const regex = /\+|\s|certificate|diploma|__|\/|\.|_z|:|-|\(|\)|&plus;/gi;
 const regex2 = /_$|__/gi;
 const regex3 = /_$/gi;
 const regex4 = /^\s+|\s+$|\s+(?=\s)/g;
 const regex5 = /__/gi;
 let result = str.replaceAll(regex, '_');
 result = result.replaceAll(regex2, '_');
 result = result.replace(regex3, ' ');
 result = result.replace(regex4, '');
 return result.replace(regex5, '_').toLowerCase();
}

// Read the CSV file
fs.createReadStream('./static/programlisting.csv')
 .pipe(csv())
 .on('data', (row) => {
     // Set the data for this current row
     const jsonFileName = row.JSON;

     // Start category
     const categoryFullName = row.Category;
     const categoryShortName = convertToURLString(categoryFullName);
     if (!usedCategoryShortNames.includes(categoryShortName)) {
         usedCategoryShortNames += categoryShortName;
         categoryButtons += `<button class='slidesbtn active' id="${categoryShortName}" onclick="filterSelection('${categoryShortName}')">${categoryFullName}</button>`;
     }
     // End category

     // Slide
     slidesStream.write(`
         <div class="column slide ${categoryShortName} show"><a href="~/src/programs/${row.URL}.html">
         <img alt="Learn more about ${row.NameofProgram}" src="~/images/${row.URL}.webp">
         ${row.NameofProgram}</a></div>
     `);

     // Start JSON, make programname.html file
     const jsonFilePath = `./static/data/${jsonFileName}`;
     const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
     row.json_data = JSON.parse(jsonData);

     const newHtmlFile = `./src/programs/${row.URL}.html`;
     const fileContents = `
         <!DOCTYPE html lang="en">
         <html lang="en">
         <head>
             <meta charset="utf-8">
             <include src="./src/components/head.htm">
                 {"title" : "${row.NameofProgram}"}
             </include>
         </head>
         <body>
             <include src="./src/components/navbar.htm"></include>
             <div class="container-fluid">
                 <include src="./src/components/program_template.htm">
                     ${JSON.stringify(row)}
                 </include>
                 <include src="./src/components/footer.htm"></include>
             </div>
         </body>
         </html>
     `;

        fs.writeFileSync(newHtmlFile, fileContents, 'utf8');
      
     programsCount++;
     // End JSON

 })
 .on('finish', () => {
     console.log(`${programsCount} program pages written`);
     // Write categories to file after all other operations are completed
     fs.writeFileSync('./src/components/program_cats.htm', categoryButtons, 'utf8', { flag: 'w' });
 })