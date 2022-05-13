const theTable = 'table-container'


let JSONFile = '../data/3500.json';
document.ourTable =  '<thead><tr><th>Credential</th><th>Program Name</th><th>Duration in Weeks</th><th>Cost</th><th>Syllabus</th></tr></thead><tbody>'

fetch(JSONFile)
    .then(function(response) {
    if (response.status == 404) {
    alert("Error, the " + JSONFile + " cannot be found")
    }
    return response.json()
    })
    .then(function(data) {
    data.programs.forEach(element => {
        if (element.Credential) {
            console.log(`${element.name},${element.Credential} `);
    let Amount = 0;
    tuition = element.domestic.forEach(amount => {
    Amount = Amount + amount.value
    }
    )
    programnameasurl = element.name.toURL();
    
    cred = element.Credential.toLowerCase();
    console.log(cred);
    // smorg = "smorgs/" + programnameasurl + "_" + programtype.toLowerCase() + ".pdf"
    programnameasurl = `../smorgs/${programnameasurl}_${cred}.pdf`
    document.ourTable = `${document.ourTable}\n<tr><td>${element.Credential}</td><td>${element.name}</td><td>${element.Duration[0].weeks} weeks</td><td>$5,000</td><td><a href='${programnameasurl}'>Download Syllabus</a></td></tr>`
    } 
});
    document.getElementById(theTable).innerHTML = document.ourTable + '</tbody>'
    
})





$(document).ready( function() {
    $('#table-container').dataTable( {
        "columns" : [
            {data:" Program Name"},
            {data : "Duration in Weeks"},
            {data: "Cost"},
            {data: "Syllabus",
                render : function (data, type, row){
                    return "<a href='"+data+"'>Download Syllabus</a>"
                
                }}
        ]
    });
});
