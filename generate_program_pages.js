const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
let usedcats = '_'
let categories ='<button class="slidesbtn active" id="all" onclick="filterSelection(\'all\')">All</button>'
let slides = ''
const slidesfile = './src/components/slides.htm'

fs.writeFile(slidesfile,'','utf8', function (err) {
  if (err) return console.log(err);
}, {flag: 'w'});

var stream = fs.createWriteStream(slidesfile, {flags:'a'});

function toURL(that) {
  const regex = /\+|\s|certificate|diploma|__|\/|\.|_z|:|\-|\(|\)|&plus;/gi
  const regex2 = /_$|__/gi
  const regex3 = /_$/gi
  const regex4 = /^\s+|\s+$|\s+(?=\s)/g
  const regex5 = /__/gi
  let thistoo
  thistoo = that.replaceAll(regex, '_')
  thistoo = thistoo.replaceAll(regex2, '_')
  thistoo = thistoo.replace(regex3, ' ')
  thistoo = thistoo.replace(regex4, '')
  return thistoo.replace(regex5, '_').toLowerCase()
}
// Read the CSV file
fs.createReadStream('./static/programlisting.csv')
 .pipe(csv())
 .on('data', async (row) => {
   
  const jsonFileName = row.JSON; //set the data  for this current row
  if (row.workexphours) {
    console.log(row.workexphours);
    
  }
  //start category
    let programcat = row.Category; //set programcat
   let programcatShort = toURL(programcat); //convert to a usable url string
   programcatShort = toURL(programcatShort); //run it through the function again to be safe
   if (usedcats.includes(programcatShort)) { //check to see if a program category has been added to the variable yet
    /// console.log('duplicate cat found') //ignore the category
  } else {
    usedcats = usedcats + programcatShort; //add the category to the usedcats var
    //append html code for the button to the categories var
    categories = categories + `<button class='slidesbtn active' id="${programcatShort}" onclick="filterSelection('${programcatShort}')">${programcat}</button>`;
    // console.log('added cat');
  }
  //end category
  
  // Slide
    stream.write(`
    <div class="column slide ${programcatShort} show"><a href="~/src/programs/${row.URL}.html">
    <img alt="Learn more about ${row.NameofProgram}" src="~/images/${row.URL}.webp">
    ${row.NameofProgram}</a></div>
    `);
    
  // 

  //start json, make programname.html file
  
   const jsonFilePath = `./static/data/${jsonFileName}`;
   const jsonData = await fs.promises.readFile(jsonFilePath, 'utf-8');
   row.json_data = JSON.parse(jsonData);
   
   const newHtmlFile = `./src/programs/${row.URL}.html`
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
        `

      
  fs.writeFile(newHtmlFile, fileContents, 'utf8', function (err) {
    if (err) return console.log(err);
  }, {flag: 'w'});
  //
  
  

  fs.writeFile('./src/components/program_cats.htm', categories, 'utf8',function (err) {
    if (err) return console.log(err);
  }, {flag: 'w'});
  // console.log(categories);
})
// now we need to generate the slide show, same as before, but static
// To do that, we need the program name, URL and thumbnail.
// then, we need to populate a variable with the code


.on('end', () => {
  console.log('CSV file successfully processed.');
});
console.log(slides);