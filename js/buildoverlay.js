var headings = [{
    "a1": "Admission Requirements",
    "a2": "Program Highlights",
    "a3": "Career Opportunities",
    "a4": "CORE COURSES",
    "a5": "Upon completion of the program the participant must demonstrate the following core competencies:"
}]
var programs_with_no_data_table = {
    "program": "english_as_a_second_language"
}



function overlayprogram(programnameasurl, programname, programtype) {

    navbar = document.getElementById('navbar')
    window.scrollTo(0, 0)
    overlaytop = navbar.offsetHeight;
    hideshowElementById('programoverlay', 'show', null, overlaytop);

    hideshowElementById('maincontent', 'hide')
    hide_data_table = programs_with_no_data_table.program.includes(programnameasurl)
    othercontent = '';
    buildProgramPage(programnameasurl, programname, programtype, hide_data_table);


}



function toCAD(amount, element) {

    try {
        return `\$${amount.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 0 })}`
    } catch (error) {
        return ' ';
    }

}
function buildProgramPage(programnameasurl, programname, programtype, hide_data_table) {



    try {




        

        // console.log(sharelink)
        const credential = programtype;
        const overlay = document.getElementById('programoverlay')
        const closebutton = `<svg class="share" onClick="shareProgram('${programnameasurl}','${programtype}','${programname}')" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 1016q-24 0-42-18t-18-42V447q0-24 18-42t42-18h169v60H220v509h520V447H569v-60h171q24 0 42 18t18 42v509q0 24-18 42t-42 18H220Zm229-307V252l-88 88-43-43 161-161 161 161-43 43-88-88v457h-60Z"/></svg><button class="closebutton" onClick="closeOverlay();">X<br />Close</button>`
        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 27) {
                closeOverlay();
            }

        }); //wtf
        othercontent = ''
        JSONFile = "data/" + programnameasurl + "_programdata.json";
        proglistingJSONFile = "data/3500.json";
        fullImage = "https://images.aolccbc.com/full/" + programnameasurl + "_full_size.webp";

        smorg = "https://smorgs.aolccbc.com/" + programnameasurl + "_" + programtype.toLowerCase() + ".pdf"
        // console.log(`I am grabbing ${JSONFile}, ${proglistingJSONFile}, ${smorg} and ${fullImage}`)
        fetch(JSONFile)
            .then(function (response) {
                if (response.status == 404) {
                    alert("Error, the " + JSONFile + " cannot be found")
                }
                return response.json()
            })
            .then(function (data) {
                // console.log(data)



                textbooks1 = "";
                optional_cooperative_placement_hours = "";
                admitreq_array = createDivfromJSON(data.admitreq, headings[0].a1)
                admitreq = admitreq_array[0].partcontent;
                a1 = admitreq_array[0].part_heading

                programhighlights_array = createDivfromJSON(data.programhighlights, headings[0].a2);
                programhighlights = programhighlights_array[0].partcontent;
                a2 = programhighlights_array[0].part_heading

                careeropp_array = createDivfromJSON(data.careeropp, headings[0].a3);
                careeropp = careeropp_array[0].partcontent
                a3 = careeropp_array[0].part_heading
                corecourses_array = createDivfromJSON(data.corecourses, headings[0].a4);
                corecourses = corecourses_array[0].partcontent;
                a4 = corecourses_array[0].part_heading
                a5 = headings[0].a5

                newMinWageDate = new Date(2022, 07, 01)
                if (newMinWageDate < new Date()) {
                    bcminwage = 15.65;
                } else {
                    bcminwage = 15.20;
                }

                const bcminannualsalary = bcminwage * 40 * 52;
                let salarystart = data.salarystart;
                if (salarystart < bcminannualsalary) {
                    salarystart = bcminannualsalary
                };
                salarystart = toCAD(salarystart, 'salararystart');
                salaryend = toCAD(data.salaryend, 'salaryend');
                if (!(data.prog_video)) {
                    syllabuslink = "<a href=https://smorgs.aolccbc.com/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>"
                } else {
                    syllabuslink = "<a href=https://smorgs.aolccbc.com/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>"
                };

                function createDivfromJSON(part, alt_heading) {
                    partcontent = '';
                    part_alt_heading = '';
                    part.paragraphs.forEach(paragraph => {
                        if (paragraph.li_title) {
                            partcontent = partcontent + "<b>" + paragraph.li_title + "</b><br />"
                        }
                        if (paragraph.ul_start) {
                            partcontent = partcontent + "<ul>"
                        } else if (paragraph.ul_end) {
                            partcontent = partcontent + "</ul>"
                        } else {
                            partcontent = partcontent + "<" + paragraph.style + ">" + paragraph.content + "</" + paragraph.style + ">";
                        }
                        alt_heading_temp = part.alt_heading
                        // console.log(alt_heading_temp)
                    });
                    if (alt_heading_temp == undefined) {
                        part_alt_heading = alt_heading

                        // console.log(`alt_heading_temp = ${alt_heading_temp}\npart_alt_heading = ${part_alt_heading}\nalt_heading = ${alt_heading}`);
                    } else {
                        part_alt_heading = alt_heading_temp
                        // console.log(alt_heading_temp);
                        // console.log(`alt_heading_temp = ${alt_heading_temp}\npart_alt_heading = ${part_alt_heading}\nalt_heading = ${alt_heading}`);
                    }
                    partcontent_array = [{
                        "partcontent": partcontent,
                        "part_heading": part_alt_heading
                    }]
                    return partcontent_array;

                }
                // console.log(`Fetching proglistingJSONFile`);
                fetch(proglistingJSONFile)
                    .then(function (response) {
                        // console.log(`Got a response \n${response}`);
                        return response.json()
                    })
                    .then((data) => {
                        // console.log(`Now, I need to serach for ${programname} in the proglistingJSONFile`)
                        mainname = programname.replace(/\sCertificate|\sDiploma/g, "")
                        mainname = mainname.toLowerCase();
                        // console.log(mainname);
                        try {
                            data.programs.forEach(program => {
                                // console.log("got to line 164");
                                if (program.name.toLowerCase() === mainname.toLowerCase()) {
                                    progtitle = program.name;
                                    programtype = program.Credential;
                                    programhours = program.Duration[0].hours;
                                    programduration = program.Duration[0].weeks;
                                    workexphours = program.Duration[0].workexperience;
                                    // console.log("Got to line 171");
                                    if (workexphours === undefined) {
                                        workexphours = '';
                                    } else {
                                    }
                                    dtuition = toCAD(program.domestic[0].tuition, 'domestic tuition');
                                    ituition = toCAD((program.domestic[0].tuition * 1.3), 'international tuition');
                                    appfee = 250;
                                    dapp = toCAD(appfee, 'domestic app fee');
                                    iapp = toCAD(appfee * 2, 'domestic app fee');
                                    assessfee = toCAD(100, 'assess (Domestic and INTL) fee');
                                    dassess = assessfee
                                    iassess = assessfee;


                                    otherfees = program.domestic[0].other;
                                    if (otherfees === undefined) {
                                        otherfees = 4;
                                    }

                                    dother = toCAD(otherfees, 'other fees');
                                    iother = dother;
                                    textbooks = program.domestic[0].textbooks;
                                    if (textbooks === undefined) {
                                        textbooks1 = "";

                                    } else {
                                        textbookscost = toCAD(textbooks, 'textbooks');

                                        textbooks1 = `<tr id="textbooks">
                                                        <td class="title">Text Books:</td>
                                                        <td>${textbookscost}</td>
                                                        <td>${textbookscost}</td>
                                                    </tr>`;

                                    }
                                    coursemat = program.domestic[0].coursematerials
                                    if (coursemat === undefined) {
                                        coursemat_html = "";
                                    } else {
                                        coursemat_cost = toCAD(coursemat, 'course materials');
                                        coursemat_html = `<tr id="coursemats">
                                        <td class="title">Course Materials:</td>
                                        <td>${coursemat_cost}</td>
                                        <td>${coursemat_cost}</td>
                                    </tr>`;
                                    }

                                    if (program.cooperative_placement_hours === undefined) {
                                        optional_cooperative_placement_hours = "";
                                    } else {
                                        cooperative_placement_hours = program.duration[0].cooperative_placement_hours;

                                    }

                                    // console.log(`Building content now`);


                                    prog_info_array = [{
                                        "top": `
                                    <div class="container-flex center">
                                    <h1>
                                        <div id="progtitle" class="progtitle1">${progtitle}</div>
                                    </h1>
                                </div>
                                <div class="container-flex center">
                                    <div id="fullimage"><img src=${fullImage} alt='Program Image'></div>
                                </div>`,
                                        "left": `
                                <div class="container-flex program-info" id="program-info">
                                    <div class="header lefthr">
                                        <h1>Program Info:</h1>
                                    </div>
                                    <div class="d-md-flex flex-row ">
                                        <div class="p-2 col1">
                                            <div class="container">
                                                <h2>${a1}</h2>
                                                <div id="admitreq">${admitreq}</div>
                                            </div>
                                            <div class="container">
                                                <h2>${a2}</h2>
                                            </div>
                                            <div class="container">
                                                <div id="programhighlights">${programhighlights}</div>
                                            </div>
                                        </div>
                                        <div class="p-2 col2">
                                            <div class="textleft">
                                                <div class="container">
                                                    <h2>${a3}</h2>
                                                </div>`,
                                        "middle": `
                                                <div class="container">
                                                    <div id="careeropp">${careeropp}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="container">
                                                    <h2>${a4}</h2>
                                                </div>
                                                <div class="container">
                                                    <p>${a5}</p>
                                                    <div id="corecourses">${corecourses}</div>
                                                </div>
                                            </div>
                                        </div>`,
                                        "right": `
                                        <div class="p-2 programdatacol" id="progdatatable">
                                            <table class="progdata">
                                                <tbody>
                                                    <tr>
                                                        <td class="title title_with_emoji">
                                                        <i class="fas fa-scroll"></i>&nbsp;Program&nbsp;Type:</td>
                                                        <td colspan="2">${programtype}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title title_with_emoji"><i class="fas fa-search-dollar"></i>&nbsp;Anticipated&nbsp;Salary:</td>
                                                        <td colspan="2">${salarystart} &ndash; ${salaryend}
                                                        </td>
                                                    </tr>
                                                    <tr class="tr-nobottomborder">
                                                        <td class="title title_with_emoji"><i class="fas fa-calendar"></i>&nbsp;Program&nbsp;Duration:</td>
                                                        <td id="duration"colspan="2">
                                                            Weeks: ${programduration}<br>
                                                            Hours: ${programhours} <br>
                                                            <p id="workexphours">${workexphours}</p>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr class="tr-notopborder tr-nobottomborder">
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
                                                    ${textbooks1}
                                                    ${coursemat_html}

                                                    <tr>
                                                        <td class="title">Other Fees:</td>
                                                        <td>${dother}</td>
                                                        <td>${dother}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Program Syllabus:</td>
                                                        <td colspan="2"><a href="${smorg}" target="_blank">Click here to Download</a></td>

                                                    </tr>
                                                    <tr>
                                                    <td class="title">Program Notes</td>
                                                    
                                                    <td colspan="2" class="breaksallowed">
                                                    Tuition fees include digital course materials. <br> 
                                                    Printed copies may be available for an additional fee.<br>
                                                    Financial Assistance may be available for those who qualify.
                                                    </td></tr>
                                                    <tr><td class="title">Graduation Requirements</td>
                                                    <td colspan="2" class="breaksallowed">
                                                    Students must maintain a 75% program average to obtain a ${programtype}
                                                    </td>
                                                    </tr>
                                                    <tr class="tr-nobottomborder">
                                                    <td class="title">Method of Delivery</td>
                                                    <td colspan="2" class="breaksallowed">
                                                    Onsite, Remote and Blended using our <br>Integrated Learning &reg;System training facilitated by qualified learning coaches.
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>`
                                    }]



                                    if (hide_data_table == true) {
                                        prog_info_array[0].right = ''

                                    }
                                    overlay.innerHTML = `${closebutton} ${prog_info_array[0].top} ${prog_info_array[0].left} ${prog_info_array[0].middle} ${prog_info_array[0].right}</div> `

                                    if (workexphours === undefined) {
                                        document.getElementById('workexphours').innerHTML = '';
                                    }
                                } else {
                                };



                            }


                            );
                        } catch (error) {
                            // console.log("Something happened: ".error);
                        }
                        return othercontent;
                    })


                return othercontent;
            })
    } catch (error) {
    }

}

function closeOverlay() {
    hideshowElementById('programoverlay', 'hide');
    emptyElementByID('programoverlay')
    hideshowElementById('maincontent', 'show');
    emptyElementByID('programoverlay');
}
;

function shareProgram(programurl, cred, name) {
    if (navigator.share) {
        navigator.share({
            title: `${name} ${cred} at Academy of Learning Career College`,
            url: `${window.location.origin}${window.location.pathname}?program=${programurl}`
        })
            .then(() => console.log('Succefful share'))
            .catch((error) => console.log('Error sharing:', error));

    } else {
        console.log('Web Share API not supported');
    }
}