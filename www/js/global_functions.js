// Toggle element visibility


String.prototype.toURL = function() {
    const regex = /\+|\s|certificate|diploma|\_\_|\/|\.|_\z|\:|\-|\(|\)|&plus;/gi;
    const regex2 = /_$|__/gi
    const regex3 = /_$/gi
    const regex4 = /^\s+|\s+$|\s+(?=\s)/g
    const regex5 = /__/gi
    thistoo = this.replaceAll(regex, '_')
    thistoo = thistoo.replaceAll(regex2, '_');
    thistoo = thistoo.replace(regex3, ' ')
    thistoo = thistoo.replace(regex4, '')
    return thistoo.replace(regex5, '_').toLowerCase()
}

function hideshowElementById(elementID,action,x,y) {
    const element = document.getElementById(elementID);
    const classes = element.classList;
    console.log(`I have been asked to ${action} the elementID ${elementID}`);
    if (action === 'hide') {
        classes.add('closed')
    } else {
        classes.remove('closed')
    }
    if (x) {
        console.log(`x postition requested ${x}`);
        element.style.left = x;
    }
    if (y) {
        console.log(`y postition requested ${y}`);
        element.style.top = y;
    }

}

// Clear out innerHTML
function emptyElementByID(elementID) {

    try {
        document.getElementById(elementID).innerHTML = '';
    } catch (error) {
    console.log(error);        
    }
}