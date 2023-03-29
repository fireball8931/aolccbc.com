function waitForProgram(programName, callback) {

    const intervalId = setInterval(() => {
        if(document.getElementById(program)) {
            clearInterval(intervalId);
            callback();
        }
    }, 1000)

}

const urlParams = new URLSearchParams(window.location.search)
const program = urlParams.get('program')


waitForProgram(program, () => {

    document.getElementById(program).click() 

})
    

