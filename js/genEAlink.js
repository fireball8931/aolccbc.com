const langleyKey = "ENPycLbv18g8";
const abbotsfordKey = "Vsv98l7AxT3o";

function generateLink(query) {
  const link = "https://www.enrichedacademy.com/users/autologin?token=";
  const suffix = "&indicator=0&host=aolccbc.com";

  const params = query.split('&').reduce((result, param) => {
    const [key, value] = param.split('=');
    result[key] = value;
    return result;
  }, {});

  const token = params.campus === 'abbotsford' ? abbotsfordKey : langleyKey;

  const finalURL = link + token + "&fname=" + params.fname + "&lname=" + params.lname + "&email=" + params.email + suffix;
  return finalURL;
}

function generateEmail() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const campus = document.getElementById('campus').value;

  const page = window.location.hostname === 'aolccbc.com' ? 'ea' : 'ea.html';
  const genLink = window.location.protocol + '//' + window.location.hostname + '/' + page + '?fname=' + fname + '&lname=' + lname + '&email=' + email + '&campus=' + campus;
  const emailBody = `Hello ${fname},\n\nAs part of your Thought Patterns for a Successful career, you have been invited to the Enriched Academy course. Click this link to access the course: ${genLink}\n\nPlease watch the orientation videos and then click the link on the page to start your course.\n\nThis course must be completed as well as the Thought Patterns course in myAOLCC in 20 hours of study.\n\nPlease let us know if you have issues accessing the course.`;
  document.getElementById('emailcontent').textContent = emailBody;
}

function copyEmailContentToClipboard() {
  const emailContent = generateEmail();
  navigator.clipboard.writeText(emailContent);
  alert("Copied the code, now compose a message to the student in Campus Login, go into source mode and paste at the top of the email. You can click on source again to see how the email looks");
}
