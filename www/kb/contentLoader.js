import { updateID } from '/js/functions.js'

export var JSONFile = 'handbook.json'
export function getHandbookContent(sectionRequested) {

    //get content from handbook.json
    
    fetch(JSONFile)
        .then(function (response) {
            ///console.log(response);
            if (response.status == 404) {
                alert("Error, the " + JSONFile + " cannot be found")
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            let things = data.handbook.section[0]
            let SectionLinks = '';
            data.handbook.section.forEach(section => {
                if (section.name == sectionRequested) {
                    
                    let paragraphContent = ''
                    let ptag = `<p>`
                    console.log(section.sectionHeader);
                    if (section.sectionHeader == true) {
                        ptag = `<p class='ToC'>`
                    }
                    section.content.forEach(paragraph => {
                        
                        paragraphContent = paragraphContent + `${ptag}${paragraph}</p>`;

                    })
                    let URIEncodedSectionQuery = encodeURI(section.name)
                    let linktosection = `${window.location.pathname}?section=${URIEncodedSectionQuery}`
                    updateID('sectionHeader', `
                            <div class="section-name">${section.name}</div>
                            <div class="dates">
                            Policy Adopted: ${section.dateAdopted} | Last Modified: ${section.dateLastModified}
                            <div class="link-to-section"><a href="${linktosection}">Link to Page</a></div>
                            </div>
                            
                            `)
                    updateID('sectionContent', `<div id="pcontent" class="pcontent">${paragraphContent}</div>`)


                    // console.log(section.id);
                    // console.log(section.name);
                    // console.log(section.dateAdopted);
                    // console.log(section.dateLastModified);


                }
            })

            //console.log(HandbookContent);




        })

}

export function buildLeftSide(){
    fetch(JSONFile)
    .then(function (response) {
        ///console.log(response);
        if (response.status == 404) {
            alert("Error, the " + JSONFile + " cannot be found")
        }
        return response.json()
    })
    .then(function (data) {
        let SectionLinks = '';
        let SectionNames = [];
        let i = 0;
        data.handbook.section.forEach(section => {
            //LinkID = `${section.name}Link`
            SectionNames[i] = section.name
            i++
            let sectionlink = `<p class="sectionnames"><a id="${section.name}" )">${section.name}</a></p>`;
            // console.log(sectionlink);
            if (section.sectionHeader == true) {
             sectionlink = `<h3>${sectionlink}</h3>`   
            }
            SectionLinks = SectionLinks + sectionlink + '<hr>';
            // console.log(SectionLinks);
            updateID('leftSide', SectionLinks)
            //addLink(section.name, sectionlink)  
        })

        document.SectionNames = SectionNames
        // console.log(SectionNames)
    })
}



export function addLink(sectionname,sectionlink) {
    document.getElementById(sectionname).addEventListener("click", function(){ getHandbookContent(sectionname)
    // console.log(sectionname)
    // console.log(sectionlink)
}, true)
}


