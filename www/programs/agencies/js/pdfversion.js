$(document).on('click','#btn',function(){

    let pdf = new jsPDF();
    pdf.html(document.body, {
        callback: function (pdf) {
            pdf.save()
        }, filename: 'AOLCC_Pricing_And_Info.PDF'
    })
    
    
       
    
    
    
    })