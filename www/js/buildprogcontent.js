function buildProgramPage(programname) {
    // const getScrollPosition = (el = window) => ({
    //     x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    //     y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    // });


    const overlay = document.getElementById('programoverlay')
    const closebutton = `<button class="closebutton" onClick="closeOverlay();">X<br />Close</button>`
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 27) {
            closeOverlay();
        }

    });
    othercontent = ''
    JSONFile = "data/" + programname + "_programdata.json";
    proglistingJSONFile = "program_listing.json";
    fullImage = "images/full/" + programname + "_full_size.webp";
    console.log(JSONFile);


    fetch(JSONFile)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)

            //programname = data.programname;
            // Set Admit Requirements Paragraphs
            //call function called create div loop

            //fullimage = `<img src=${fullImage} alt='Program Image'>`;
            smorg = "smorgs/" + programname + "_" + data.programtype.toLowerCase() + ".pdf"
            textbooks1 = "";
            optional_cooperative_placement_hours = "";
            admitreq = createDivfromJSON(data.admitreq);
            //        console.log(createDivfromJSON(data.admitreq));
            programhighlights = createDivfromJSON(data.programhighlights);
            careeropp = createDivfromJSON(data.careeropp);
            corecourses = createDivfromJSON(data.corecourses);
            newMinWageDate = new Date(2022, 07, 01)
            if (newMinWageDate < new Date()) {
                bcminwage = 15.65;
            } else {
                bcminwage = 15.20;
            }
            console.log(newMinWageDate)
            console.log('BC Minimum Wage is: ' + bcminwage)

            const bcminannualsalary = bcminwage * 40 * 52;
            let salarystart = data.salarystart;
            if (salarystart < bcminannualsalary) {
                salarystart = bcminannualsalary
                console.log('Salary Start too low, overriding to ' + salarystart.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }))
            };
            salarystart = salarystart.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
            //console.log(salarystart);
            salaryend = data.salaryend.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
            if (!(data.prog_video)) {
                syllabuslink = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>"
            } else {
                syllabuslink = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>"
            };

            function createDivfromJSON(part) {
                //console.log(partname);
                partcontent = '';

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
                    // searchtext = "Searching for " + programname
                    mainname = programname

                    // console.log(searchtext);

                    data.programs.forEach(program => {
                            //console.log(program.name);
                            programname2 = "";
                            programname2 = program.name.replace(/\+| |-/g, "_").toLowerCase();
                            programname2 = programname2.replace(/__/g, "_");
                            //console.log(programname2);
                            //console.log(mainname);
                            if (programname2 == mainname) {
                                // console.log("I found it " + mainname + " is the same as " + programname2);
                                // console.log(program.credential);
                                progtitle = program.name;
                                programtype = program.credential;
                                programhours = program.duration[0].hours;
                                programduration = program.duration[0].weeks;
                                // workexphours = data.workexphours;
                                dtuition = program.tuition[0].domestic_tuition.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                ituition = (program.tuition[0].domestic_tuition * 1.3).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                dapp = program.tuition[0].domestic_application_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                iapp = (program.tuition[0].domestic_application_fee * 2).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                dassess = program.tuition[0].assessment_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                iassess = program.tuition[0].assessment_fee.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                otherfees = 4;
                                if (program.tuition[0].other === undefined) {

                                } else {
                                    otherfees = otherfees + program.tuition[0].other

                                    if (otherfees === 8) {
                                        otherfees = 4;
                                    }
                                }

                                dother = otherfees.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
                                iother = dother;
                                if (program.textbooks === undefined) {
                                    textbooks1 = "";

                                } else {
                                    textbookscost = program.tuition[0].textbooks.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

                                    textbooks1 = textbookscost;
                                    // textbooks2 = textbookscost;
                                }
                                if (program.cooperative_placement_hours === undefined) {
                                    optional_cooperative_placement_hours = "";
                                } else {
                                    cooperative_placement_hours = program.duration[0].cooperative_placement_hours;

                                }




                                othercontent = `
                                <div class="container-flex center">
                                <h1>
                                    <div id="progtitle" class="progtitle1">${progtitle}</div>
                                </h1>
                            </div>
                            <div class="container-flex center">
                                <div id="fullimage"><img src=${fullImage} alt='Program Image'></div>
                            </div>
                            <div class="container-flex program-info" id="program-info">
                                <div class="header lefthr">
                                    <h1>Program Info:</h1>
                                </div>
                                <div class="d-md-flex flex-row">
                                    <div class="p-2">
                                        <div class="container">
                                            <h2>Admission Requirements</h2>
                                            <div id="admitreq">${admitreq}</div>
                                        </div>
                                        <div class="container">
                                            <h2>Program Highlights</h2>
                                        </div>
                                        <div class="container">
                                            <div id="programhighlights">${programhighlights}</div>
                                        </div>
                                    </div>
                                    <div class="p-2">
                                        <div class="textleft">
                                            <div class="container">
                                                <h2>Career Opportunities</h2>
                                            </div>
                                            <div class="container">
                                                <div id="careeropp">${careeropp}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="container">
                                                <h2>CORE COURSES</h2>
                                            </div>
                                            <div class="container">
                                                <p>Upon completion of the program the participant must demonstrate the following core competencies:</p>
                                                <div id="corecourses">${corecourses}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-2 programdatacol">
                                        <table class="progdata">
                                            <tbody>
                                                <tr>
                                                    <td class="title">Program Type:</td>
                                                    <td colspan="2">${programtype}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title"> Anticipated salary:</td>
                                                    <td colspan="2">${salarystart} &ndash; ${salaryend}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title"> Program Duration:</td>
                                                    <td colspan="2">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>${programduration} Weeks</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>${programhours} Hours</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>${optional_cooperative_placement_hours} Work Experience Hours</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <h3>Tuition Fees</h3>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Tuition:</td>
                                                    <td>${dtuition}</td>
                                                    <td>${ituition}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Application:</td>
                                                    <td>${dapp}</td>
                                                    <td>${iapp}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Assessment:</td>
                                                    <td>${dassess}</td>
                                                    <td>${iassess}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Text Books:</td>
                                                    <td>${textbooks1}</td>
                                                    <td>${textbooks1}</td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Other Fees:</td>
                                                    <td>${otherfees}</td>
                                                    <td>${otherfees}</td>
                                                </tr>
                            
                                            </tbody>
                                        </table>
                                        <p>Program Syllabus:
                                            <a href="${smorg}" target="_blank">Click here to Download</a>
                            
                                        </p>
                            
                            
                            
                                    </div>
                                </div>
                                
                                
                                `;


                                //console.log(othercontent);
                                overlay.innerHTML = closebutton + othercontent;
                            } else {
                                //console.log('there was an issue')
                            };


                        }


                    );
                    // console.log(othercontent);
                    return othercontent;
                })

            // console.log(othercontent);

            return othercontent;
            // console.log(othercontent);
        })
    console.log(othercontent);
    // return othercontent;
}

function closeOverlay() {
    var overlay = document.getElementById('programoverlay')
    const list = overlay.classList
    list.add("closed");
    overlay.innerHTML = '';
    window.scrollTo(0, 0)
}