const axios = require('axios');
const xml2js = require('xml2js');
const fs = require('fs');

async function downloadCSV() {
    const atomUrl = 'https://open.canada.ca/data/en/feeds/dataset/adad580f-76b0-4502-bd05-20c125de9116.atom';

    // Download Atom file
    const atomResponse = await axios.get(atomUrl);
    const atomData = atomResponse.data;
    
    // Remove BOM from Atom file
    const atomDataWithoutBOM = atomData.replace(/^\uFEFF/, '');

    // Convert Atom file to JavaScript object
    const parser = new xml2js.Parser();
    const atomObj = await parser.parseStringPromise(atomDataWithoutBOM);

    // Get link to JSON file
    
    const jsonUrl = atomObj.feed.entry[0].link[0].$.href;
    
    // Download JSON file
    const jsonResponse = await axios.get(`https://open.canada.ca${jsonUrl}`);
    const jsonData = jsonResponse.data;

    // Get link to first CSV file
    const csvUrl = jsonData.result.resources[0].url;

    // Download CSV file
    const csvResponse = await axios.get(csvUrl);
    const csvData = csvResponse.data;

    // Remove BOM from CSV file
    const csvDataWithoutBOM = csvData.replace(/^\uFEFF/, '');

    // Write CSV data to file
    fs.writeFileSync('data.csv', csvDataWithoutBOM);
}

downloadCSV();