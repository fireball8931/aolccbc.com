function programRow( name, duration, tuition, smorg){
    this.name = name;
    this.duration - duration;
    this.tuition = tuition;
    this.smorg = smorg;

}

let JSONFile = '../data/3500.json';
//let csvdata = 'Program Name,@ 25 hours a week, Cost, Syllabus';
let csvdata = []
var OurCSVData = (
    fetch(JSONFile)
            .then(function(response) {
                ///console.log(response);
                if (response.status == 404) {
                    alert("Error, the " + JSONFile + " cannot be found")
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
                    new programRow(`\"${element.name}\",\"${element.Duration[0].weeks} weeks\",${tuition},\"random.pdf\"`)
                    //csvdata = `${csvdata},[]`
                    // csvdata = `${csvdata}\n${element.name},${element.Duration[0].weeks} weeks,random.pdf`
                    
                });

                

            })
        );




function format_link(link) {
    if (link)
        return "<a href='" + link + "' target='_blank'>Download Syllabus</a>";
    else return "";
}

function format_dollars(dollars) {
    
    if (dollars) {
        dollars = parseInt(dollars)
        value = dollars.toLocaleString('en-US') 
        value = `$${value}`
        console.log(typeof value);
        return value
    } else {
        console.log('No Value Provided');
        return "";
    } 
}

$(document).ready( function () {
    $('#table-container').DataTable({
        data : [
            
        ],
        columns: [
            {data: "Name"},
            {data: "Duration"},
            {data: "Tuition"},
            {data: "SMORG"}

        ]
        
    })
})



// CsvToHtmlTable.init({
//     csv_path: "data/programs.csv",
//     element: "table-container",
//     allow_download: false,
//     csv_options: {
//         separator: ","
        
//     },
//     datatables_options: {
//         paging: false
        
//     },
//     custom_formatting: [
//         [3, format_link],
//         [2, format_dollars]
//     ]
// });



