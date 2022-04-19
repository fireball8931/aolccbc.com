String.prototype.toTitle = function() {
  return this.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

String.prototype.toNumber = function() {
  return this.replace(/\$|\,/gm,'')
}


async function getData(file) {
  try {
         
    Papa.parse(file, {
      download: true,
      header: true,
      complete: function(results) {
        console.log("Finished:", results.data);
        results.data.forEach(program => {
          if(program["Name of Program"]){
          programname = program["Name of Program"].toLowerCase().toTitle();
          domestic_tuition = program["Program\nCost\nLast\nYear"];

          console.log(programname)
          console.log(domestic_tuition.toNumber())   
          
        } });
      }
    });            
      
      
  } catch (err) {
      //console.log(err)
  }
}

