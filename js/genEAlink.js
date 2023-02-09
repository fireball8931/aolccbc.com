function generateLink(query) {
 let link="https://www.enrichedacademy.com/users/autologin?token=";
 let token = "Vsv98l7AxT3o";
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

let finalURL = `${link}${token}&fname=${result.fname}&lname=${result.lname}&email=${result.email}${suffix}`;

return finalURL

}

function generateEmail(){
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var email = document.getElementById('email').value

  document.getElementById('emailcontent').innerHTML = `Hello ${fname},<br />As part of your Thought Patterns for a Successful career, you have been invited to the Enriched Academy course.<br/>--&gt; <a href="https://aolccbc.com/ea?fname=${fname}&lname=${lname}&email=${email}">Please click this link here </a>  &lt;--, watch the and then click the link on the page to start your course. <br />This course must be completed as well as the Thought Patterns course in myAOLCC in 20 hours of study.<br />Please let us know if you have issues accessing the course.`
}

function copyEmailHTML(){
  // let copyText = document.getElementById("emailcontent");
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var email = document.getElementById('email').value

  var EmailContent = `Hello ${fname},<br />As part of your Thought Patterns for a Successful career, you have been invited to the Enriched Academy course.<br/>--&gt; <a href="https://aolccbc.com/ea?fname=${fname}&lname=${lname}&email=${email}">Please click this link here </a>  &lt;--, watch the and then click the link on the page to start your course. <br />This course must be completed as well as the Thought Patterns course in myAOLCC in 20 hours of study.<br />Please let us know if you have issues accessing the course.`
  navigator.clipboard.writeText(EmailContent);
  alert("Copied the code, now compose a message to the student in Campus Login, go into source mode and paste at the top of the email. You can click on source again to see how the email looks");
}
