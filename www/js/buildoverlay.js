//import '/js/builprogcontent.js';

function overlayprogram(programnameasurl, programname) {
    console.log("start");
    var overlay = document.getElementById('programoverlay')
    var list = overlay.classList
    list.remove("closed");
    navbar = document.getElementById('navbar')
    window.scrollTo(0, 0)
    overlaytop = navbar.offsetHeight;
    overlay.style.top = overlaytop;
    //overlay.style.height = '1000px';
    // const closebutton = `<button class="closebutton" onClick="closeOverlay(${getScrollPosition.x}, ${getScrollPosition.y});">X<br />Close</button>`
    othercontent = '';
    //Get the info from the JSON files
    console.log([programnameasurl]);
    console.log([programname]);
    buildProgramPage(programnameasurl,programname);

}