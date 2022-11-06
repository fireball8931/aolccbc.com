String.prototype.toTitle = function() {

    thistoo = this.replaceAll(/cert\./gi, 'Certification')
        //thistoo = thistoo.replaceAll(/prep/gi, 'preparation')
    thistoo = thistoo.replaceAll(/mcsa/gi, 'Microsoft')
    thistoo = thistoo.replaceAll(/addction/gi, 'Addictions')
    thistoo = thistoo.replaceAll(/W\//gi, 'With')
    return thistoo.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

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

String.prototype.toNumber = function() {
    return this.replace(/\$|\,/gm, '')
}



function getData(file) {
    try {
        mycontent = ''
        categories_short = ''
        categories = `<button class=\"slidesbtn active\" onclick=\"filterSelection('all')\">All</button>`
        usedcats = '_'
            //categories = ''     
        Papa.parse(file, {
            download: true,
            header: true,
            complete: function(results) {
                ///console.log("Finished:", results.data);
                //foreach loop
                results.data.forEach(program => {
                        if (program["Name of Program"]) {
                            if (program["Active"] == 'Yes') {
                                // console.log(program);
                                programname = program["Name of Program"].toTitle();
                                programcat = program['Category'];
                                programnameasurl = program["URL"]
                                programcat_short = programcat.toURL();
                                programcat_short = programcat_short.toURL();
                                program_type = program["Type"]
                                    //console.log(program_type);
                                if (usedcats.includes(programcat_short)) {
                                    ///console.log('duplicate cat found')


                                } else {
                                    usedcats = usedcats + programcat_short
                                    categories = categories + `<button class='slidesbtn active' onclick=\"filterSelection('${programcat_short}')\">${programcat}</button>` //console.log('added cat')                                        //console.log(usedcats)
                                }



                                //programname.toURL();
                                ///console.log(program["Tuition"])
                                //domestic_tuition = program["Tuition"].toNumber();
                                //programweeks = program["Weeks Duration"];
                                //programhours = programweeks * 20;
                                // console.log(programname)
                                    //console.log(programcat)
                                    ///console.log(domestic_tuition)                                //console.log(programweeks)                                //console.log(programhours)
                                // console.log(programnameasurl)

                                mycontent = `${mycontent}<div class="column ${programcat_short} slide show"><div class="content"><button onClick=\"overlayprogram\('${programnameasurl}\',\'${programname}'\,\'${program_type}\')\"> <img src="images/${programnameasurl}.webp" alt="${programname}" style="width:100%" /><h4>${programname}</h4></div></button></div></div>`;

                            }
                        }
                    }

                    //<a  href="/programs/${programnameasurl}"></a>
                );
                //foreach loop
                //console.log(mycontent)
                document.getElementById('myslidesbtnContainer').innerHTML = categories;
                document.getElementById('slides').innerHTML = mycontent;

                ///console.log(categories)    
                //return mycontent;




            }
        });

    } catch (err) {
        //console.log(err)
    }

}