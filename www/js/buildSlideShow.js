function buildSlideShow() {
    fetch("./program_listing.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)

        data.programs.forEach(program => {
            document.getElementById('fullimage').innerHTML
        });
    })
}
