fetch('./programdata.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('programname').innerHTML = data.programname;
        document.getElementById('admitreq').innerHTML = data.admitreq;
        document.getElementById('programhighlights').innerHTML = data.programhighlights;
        document.getElementById('careeropp').innerHTML = data.careeropp;
        document.getElementById('corecourses').innerHTML = data.corecourses;
        document.getElementById('programtype').innerHTML = data.programtype;
        document.getElementById('salarystart').innerHTML = data.salarystart.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('salaryend').innerHTML = data.salaryend.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('programhours').innerHTML = data.programhours;
        document.getElementById('programduration').innerHTML = data.programduration;
        // document.getElementById('workexphours').innerHTML = data.workexphours;
        document.getElementById('dtuition').innerHTML = data.domestic_fees[0].tuition.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('ituition').innerHTML = (data.domestic_fees[0].tuition * 1.4).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dapp').innerHTML = data.domestic_fees[0].application.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iapp').innerHTML = (data.domestic_fees[0].application * 2).toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dassess').innerHTML = data.domestic_fees[0].assessment.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iassess').innerHTML = data.domestic_fees[0].assessment.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('dother').innerHTML = data.domestic_fees[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        document.getElementById('iother').innerHTML = data.domestic_fees[0].other.toLocaleString('en-US', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
        if (!(data.prog_video)) {
            document.getElementById('syllabuslink').innerHTML = "<a href=" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>";
        } else {
            document.getElementById('syllabuslink').innerHTML = "<a href=" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>";
        }

    })