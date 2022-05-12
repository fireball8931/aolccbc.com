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

CsvToHtmlTable.init({
    csv_path: "data/programs.csv",
    element: "table-container",
    allow_download: false,
    csv_options: {
        separator: ","
        
    },
    datatables_options: {
        paging: false
        
    },
    custom_formatting: [
        [3, format_link],
        [2, format_dollars]
    ]
});