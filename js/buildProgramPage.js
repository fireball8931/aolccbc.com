import { toCAD } from 'toCAD.js'
import { closeOverlay } from 'closeOverlay.js'

export function buildProgramPage (programnameasurl, programname, programtype, hideDataTable) {
  try {
    const overlay = document.getElementById('programoverlay')
    const closebutton = '<button class="closebutton" onClick="closeOverlay();">X<br />Close</button>'
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeOverlay()
      }
    })
    const othercontent = ''
    const JSONFile = `data/${programnameasurl}_programdata.json`
    const proglistingJSONFile = 'data/3500.json'
    const fullImage = 'images/full/' + programnameasurl + '_full_size.webp'

    const smorg = `smorgs/${programnameasurl}_${programtype.toLowerCase()}.pdf`
    console.log(`I am grabbing ${JSONFile}, ${proglistingJSONFile}, ${smorg} and ${fullImage}`)
    fetch(JSONFile)
      .then(function (response) {
        if (response.status === 404) {
          alert('Error, the ' + JSONFile + ' cannot be found')
        }
        return response.json()
      })
      .then(function (data) {
        console.log(data)

        const textbooks1 = ''
        let optionalCooperativePlacementHours = ''
        const admitreqArray = createDivfromJSON(data.admitreq, headings[0].a1)
        const admitreq = admitreqArray[0].partcontent
        const a1 = admitreqArray[0].part_heading

        const programhighlightsArray = createDivfromJSON(data.programhighlights, headings[0].a2)
        const programhighlights = programhighlightsArray[0].partcontent
        const a2 = programhighlightsArray[0].part_heading

        const careeroppArray = createDivfromJSON(data.careeropp, headings[0].a3)
        const careeropp = careeroppArray[0].partcontent
        const a3 = careeroppArray[0].part_heading
        const corecoursesArray = createDivfromJSON(data.corecourses, headings[0].a4)
        const corecourses = corecoursesArray[0].partcontent
        const a4 = corecoursesArray[0].part_heading
        const a5 = headings[0].a5

        const bcminwage = 15.65

        const bcminannualsalary = bcminwage * 40 * 52
        let salarystart = data.salarystart
        if (salarystart < bcminannualsalary) {
          salarystart = bcminannualsalary
        };
        salarystart = toCAD(salarystart, 'salararystart')
        const salaryend = toCAD(data.salaryend, 'salaryend')

        function createDivfromJSON (part, altHeading) {
          let partcontent = ''
          let partAltHeading = ''
          part.paragraphs.forEach(paragraph => {
            if (paragraph.li_title) {
              partcontent = partcontent + '<b>' + paragraph.li_title + '</b><br />'
            }
            if (paragraph.ul_start) {
              partcontent = partcontent + '<ul>'
            } else if (paragraph.ul_end) {
              partcontent = partcontent + '</ul>'
            } else {
              partcontent = partcontent + '<' + paragraph.style + '>' + paragraph.content + '</' + paragraph.style + '>'
            }
            const altHeadingTemp = part.altHeading
            console.log(altHeadingTemp)
          })
          if (altHeading === undefined) {
            partAltHeading = altHeading

            console.log(`altHeadingTemp = ${altHeading}\npartAltHeading = ${partAltHeading}\naltHeading = ${altHeading}`)
          } else {
            partAltHeading = altHeading
            console.log(altHeading)
            console.log(`altHeadingTemp = ${altHeading}\npartAltHeading = ${partAltHeading}\naltHeading = ${altHeading}`)
          }
          const partcontentArray = [{
            partcontent,
            part_heading: partAltHeading
          }]
          return partcontentArray
        }
        console.log('Fetching proglistingJSONFile')
        fetch(proglistingJSONFile)
          .then(function (response) {
            console.log(`Got a response \n${response}`)
            return response.json()
          })
          .then((data) => {
            console.log(`Now, I need to serach for ${programname} in the proglistingJSONFile`)
            let mainname = programname.replace(/\sCertificate|\sDiploma/g, '')
            mainname = mainname.toLowerCase()

            data.programs.forEach(program => {
              if (program.name.toLowerCase() === mainname.toLowerCase()) {
                const progtitle = program.name
                const programtype = program.Credential
                const programhours = program.Duration[0].hours
                const programduration = program.Duration[0].weeks
                let workexphours = program.Duration[0].workexperience

                if (workexphours === undefined) {
                  workexphours = ''
                }
                const dtuition = toCAD(program.domestic[0].tuition, 'domestic tuition')
                const ituition = toCAD((program.domestic[0].tuition * 1.3), 'international tuition')
                const appfee = 250
                const dapp = toCAD(appfee, 'domestic app fee')
                const iapp = toCAD(appfee * 2, 'domestic app fee')
                const assessfee = toCAD(100, 'assess (Domestic and INTL) fee')
                const dassess = assessfee
                const iassess = assessfee

                let otherfees = program.domestic[0].other
                if (otherfees === undefined) {
                  otherfees = 4
                }

                const dother = toCAD(otherfees, 'other fees')
                const textbooks = program.domestic[0].textbooks
                
                if (textbooks !== undefined) {
                let textbookscost = toCAD(textbooks, 'textbooks')
                }
                let coursemat = program.domestic[0].coursematerials
                if (coursemat === undefined) {
                } else {
                  coursemat = toCAD(coursemat, 'course materials')
                  coursemat = `<tr id="coursemats">
                                        <td class="title">Course Materials:</td>
                                        <td>${coursemat}</td>
                                        <td>${coursemat}</td>
                                    </tr>`
                }

                if (program.cooperativePlacementHours === undefined) {
                  optionalCooperativePlacementHours = ''
                } else {
                  optionalCooperativePlacementHours = program.duration[0].cooperativePlacementHours
                }

                console.log('Building content now')

                progInfoArray = [{
                  top: `
                                    <div class="container-flex center">
                                    <h1>
                                        <div id="progtitle" class="progtitle1">${progtitle}</div>
                                    </h1>
                                </div>
                                <div class="container-flex center">
                                    <div id="fullimage"><img src=${fullImage} alt='Program Image'></div>
                                </div>`,
                  left: `
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
                  middle: `
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
                  right: `
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
                                                    ${coursemat}
    
                                                    <tr>
                                                        <td class="title">Other Fees:</td>
                                                        <td>${dother}</td>
                                                        <td>${dother}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Program Syllabus:</td>
                                                        <td colspan="2"><a href="${smorg}" target="_blank" rel="noopener noreferrer">Click here to Download</a></td>
                                                                                                         
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

                if (hideDataTable === true) {
                  progInfoArray[0].right = ''
                }
                overlay.innerHTML = `${closebutton} ${progInfoArray[0].top} ${progInfoArray[0].left} ${progInfoArray[0].middle} ${progInfoArray[0].right}</div> `

                if (workexphours === undefined) {
                  document.getElementById('workexphours').innerHTML = ''
                }
              } else { };
            }

            )
            return othercontent
          })

        return othercontent
      })
  } catch (error) {
  }
}
