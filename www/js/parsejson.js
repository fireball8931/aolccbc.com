console.log(window.location.search);

function buildProgramPage(programname) {

let JSONFile = "data/" + programname + "_programdata.json";
let fullImage = "images/full/" + programname + "_full_size.webp"

    fetch(JSONFile)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        //document.getElementById('programname').innerHTML = data.programname;
        // Set Admit Requirements Paragraphs
        //call function called create div loop
        
        document.getElementById('fullimage').innerHTML = `<img src=${fullImage} alt='Program Image'>`;
        document.getElementById('admitreq').innerHTML = createDivfromJSON(data.admitreq);
//        console.log(createDivfromJSON(data.admitreq));
        document.getElementById('programhighlights').innerHTML = createDivfromJSON(data.programhighlights);
        document.getElementById('careeropp').innerHTML = createDivfromJSON(data.careeropp);
        document.getElementById('corecourses').innerHTML = createDivfromJSON(data.corecourses);
        document.getElementById('programtype').innerHTML = data.programtype;
        document.getElementById('salarystart').innerHTML = data.salarystart.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('salaryend').innerHTML = data.salaryend.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('programhours').innerHTML = data.programhours;
        document.getElementById('programduration').innerHTML = data.programduration;
        // document.getElementById('workexphours').innerHTML = data.workexphours;
        document.getElementById('dtuition').innerHTML = data.domestic_fees[0].tuition.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('ituition').innerHTML = (data.domestic_fees[0].tuition * 1.3).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dapp').innerHTML = data.domestic_fees[0].application.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iapp').innerHTML = (data.domestic_fees[0].application * 2).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dassess').innerHTML = data.domestic_fees[0].assessment.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iassess').innerHTML = data.domestic_fees[0].assessment.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dother').innerHTML = data.domestic_fees[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iother').innerHTML = data.domestic_fees[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        if (!(data.prog_video)) {
            document.getElementById('syllabuslink').innerHTML = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>";
        } else {
            document.getElementById('syllabuslink').innerHTML = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>";
        }

        function createDivfromJSON(part) {
            //console.log(partname);
            let partcontent = '';

            part.paragraphs.forEach(paragraph => {
                if(paragraph.li_title){
                    partcontent = partcontent + "<b>" + paragraph.li_title + "</b><br />"
                }
                if(paragraph.ul_start){
                    partcontent = partcontent + "<ul>"
                } else if(paragraph.ul_end) {
                    partcontent = partcontent + "</ul>"
                } else {
                    partcontent = partcontent + "<" + paragraph.style + " >" + paragraph.content + "</" + paragraph.style + ">"; 
                }           
                
            });
        return partcontent;
            
        }
     })
}



function buildSlideShow() {
    fetch("./program_listing.json")

    console.log(data)
}