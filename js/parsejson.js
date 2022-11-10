///console.log(window.location.search);

function buildProgramPage(programname) {

    let JSONFile = "data/" + programname + "_programdata.json";
    let proglistingJSONFile = "/data/3500.json";
    let fullImage = "images/full/" + programname + "_full_size.webp";
    //console.log(programname)
    fetch(JSONFile)
        .then(function(response) {
            ///console.log(response);
            return response.json()
        })
        .then(function(data) {
            ///console.log(data)
            //document.getElementById('programname').innerHTML = data.programname;
            // Set Admit Requirements Paragraphs
            //call function called create div loop

            document.getElementById('fullimage').innerHTML = `<img src=${fullImage} alt='Program Image'>`;
            document.getElementById('admitreq').innerHTML = createDivfromJSON(data.admitreq);
            //      //console.log(createDivfromJSON(data.admitreq));
            document.getElementById('programhighlights').innerHTML = createDivfromJSON(data.programhighlights);
            document.getElementById('careeropp').innerHTML = createDivfromJSON(data.careeropp);
            document.getElementById('corecourses').innerHTML = createDivfromJSON(data.corecourses);
            document.getElementById('salarystart').innerHTML = data.salarystart.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
            document.getElementById('salaryend').innerHTML = data.salaryend.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
            if (!(data.prog_video)) {
                document.getElementById('syllabuslink').innerHTML = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>";
            } else {
                document.getElementById('syllabuslink').innerHTML = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>";
            }

            function createDivfromJSON(part) {
                //console.log(partname);
                let partcontent = '';

                part.paragraphs.forEach(paragraph => {
                    if (paragraph.li_title) {
                        partcontent = partcontent + "<b>" + paragraph.li_title + "</b><br />"
                    }
                    if (paragraph.ul_start) {
                        partcontent = partcontent + "<ul>"
                    } else if (paragraph.ul_end) {
                        partcontent = partcontent + "</ul>"
                    } else {
                        partcontent = partcontent + "<" + paragraph.style + " >" + paragraph.content + "</" + paragraph.style + ">";
                    }

                });
                return partcontent;

            }
            fetch(proglistingJSONFile)
                .then(function(response) {
                    return response.json()
                })
                .then((data) => {
                    // let searchtext = "Searching for " + programname
                    let mainname = programname

                    //console.log(searchtext);

                    data.programs.forEach(program => {
                            //console.log(program.name);
                            var programname2 = "";
                            programname2 = program.name.replace(/\+| |-/g, "_").toLowerCase();
                            programname2 = programname2.replace(/__/g, "_");
                            //console.log(programname2);
                            //console.log(mainname);
                            if (programname2 == mainname) {
                                ///console.log("I found it " + mainname + " is the same as " + programname2);                                    //console.log(program.credential);
                                document.getElementById('progtitle').innerHTML = program.name;
                                document.getElementById('programtype').innerHTML = program.credential;
                                document.getElementById('programhours').innerHTML = program.duration[0].hours;
                                document.getElementById('programduration').innerHTML = program.duration[0].weeks;
                                // document.getElementById('workexphours').innerHTML = data.workexphours;
                                document.getElementById('dtuition').innerHTML = program.tuition[0].domestic_tuition.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('ituition').innerHTML = (program.tuition[0].domestic_tuition * 1.3).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('dapp').innerHTML = program.tuition[0].domestic_application_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('iapp').innerHTML = (program.tuition[0].domestic_application_fee * 2).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('dassess').innerHTML = program.tuition[0].assessment_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('iassess').innerHTML = program.tuition[0].assessment_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('dother').innerHTML = program.tuition[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                document.getElementById('iother').innerHTML = program.tuition[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                if (program.textbooks === undefined) {
                                    document.getElementById('optional_textbook').innerHTML = "";
                                } else {
                                    let textbookscost = program.tuition[0].textbooks.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

                                    document.getElementById('textbooks1').innerHTML = textbookscost;
                                    document.getElementById('textbooks2').innerHTML = textbookscost;
                                }
                                if (program.cooperative_placement_hours === undefined) {
                                    document.getElementById('optional_cooperative_placement_hours').innerHTML = "";
                                } else {
                                    document.getElementById('cooperative_placement_hours').innerHTML = program.duration[0].cooperative_placement_hours;

                                }





                                return;
                            } else {

                            };
                        }

                    );
                })
        })
}