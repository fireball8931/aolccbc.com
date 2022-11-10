const sharp = require('sharp');

let inputFile  = "img.jpg";
let outputFile = "output.jpg";

sharp(inputFile).resize({ height: 780 }).toFile(outputFile)
    .then(function(newFileInfo) {
        // newFileInfo holds the output file properties
        console.log("Success")
    })
    .catch(function(err) {
        console.log("Error occured");
    });