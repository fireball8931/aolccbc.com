const converter = require('json-2-csv');
const fs = require('fs');
const fetch = require('node-fetch');


const programInfo = JSON.parse(fs.readFileSync('../data/3500.json'))


var OurCSVData = (
    fetch('../data/3500.json',)
            .then(function(response) {
                ///console.log(response);
                if (response.status == 404) {
                    alert("Error, the cannot be found")
                }
                return response.json()
            })
            .then(function(data) {
                document.CSVDATA = data
                data.programs.forEach(element => {
                    let Amount = 0;
                    tuition = element.domestic.forEach(amount => {
                        Amount = Amount + amount.value
                    }
                        )
                   // new programRow(`\"${element.name}\",\"${element.Duration[0].weeks} weeks\",${tuition},\"random.pdf\"`)
                    //csvdata = `${csvdata},[]`
                    csvdata = `${csvdata}\n${element.name},${element.Duration[0].weeks} weeks,random.pdf`
                    
                });

                
                return csvdata;
            })
            
        );

fs.writeFileSync('data.csv', OurCSVData)