import { bodyframework } from "/components/body.js";
import { updateID } from "/js/functions.js";
import { cssincludes } from "/components/css.js";
import { buildLeftSide, getHandbookContent } from "./contentLoader.js";


document.head.innerHTML = cssincludes + `<script>import { getHandbookContent } from "./contentLoader.js";</script>`;
document.body.innerHTML = bodyframework



document.title = `Student Handbook`

let bodycontent = `

<div id="leftSide" class="leftSide">Left side</div>
<div id="sectionContainer" class="sectionContainer">
<div id="sectionHeader" class="sectionHeader"></div>
<br>
<div id="sectionContent" class="sectionContent"></div>
</div>

`;
updateID('content', bodycontent)
buildLeftSide();

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.section; // "some_value"
console.log(value)
if (value == undefined) { 
    value = "Introduction"
}

getHandbookContent(decodeURI(value))

document.addEventListener('click', (e) => { 
    let criterion = e.target.id
    
    if (document.SectionNames.indexOf(criterion) !== -1 ) {
        getHandbookContent(criterion)
    } 

})