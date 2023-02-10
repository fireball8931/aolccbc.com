//  TODO
//  [x] Update code to use multiple API keys
//  [x] Update Query URL to specify campus and match campus to API key

var langleykey = "ENPycLbv18g8"
var abbotsfordkey = "Vsv98l7AxT3o"
function generateLink(query) {
 let link="https://www.enrichedacademy.com/users/autologin?token=";
//  let token = "Vsv98l7AxT3o";
 let suffix = "&indicator=0&host=aolccbc.com";
//  "https://www.enrichedacademy.com/users/autologin?token=Vsv98l7AxT3o&fname=first_name_value&lname=last_name_value&email=email_address&indicator=0&host=aolccbc.com"

// let query = window.location.search.substring(1);


let params = query.split('&');
let result = {};

params.forEach(param => {
  let [key, value] = param.split('=');
  result[key] = value;
});
console.log(result)
if (result.campus === 'abbotsford') {
  var token = abbotsfordkey
} else {
  var token = langleykey
}


let finalURL = `${link}${token}&fname=${result.fname}&lname=${result.lname}&email=${result.email}${suffix}`;

return finalURL

}


function generateEmail(){
  document.getElementById('emailcontent').innerHTML = (generateEmailfunc())
}

function generateEmailfunc(){
  var fname = document.getElementById('fname').value //First Name
  var lname = document.getElementById('lname').value //Last Name
  var email = document.getElementById('email').value //Personal Email
  var campus = document.getElementById('campus').value //Campus to be Associated with
  if (window.location.hostname === 'aolccbc.com'){ 
    var page = 'ea'
  } else {
    var page = 'ea.html'
  }

  let genLINK = `${window.location.protocol}//${window.location.hostname}/${page}?fname=${fname}&lname=${lname}&email=${email}&campus=${campus}`
  let emailBody = `Hello ${fname},<br />As part of your Thought Patterns for a Successful career, you have been invited to the Enriched Academy course.<br/>--&gt; <a href="${genLINK}">Please click this link here </a>  &lt;--, watch the and then click the link on the page to start your course. <br />This course must be completed as well as the Thought Patterns course in myAOLCC in 20 hours of study.<br />Please let us know if you have issues accessing the course.`
  return emailBody
}

function copyEmailHTML(){
  // let copyText = document.getElementById("emailcontent");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var email = document.getElementById('email').value
  
  navigator.clipboard.writeText(generateEmailfunc());
  alert("Copied the code, now compose a message to the student in Campus Login, go into source mode and paste at the top of the email. You can click on source again to see how the email looks");
}
