function generateLink(query) {
 let link="https://www.enrichedacademy.com/users/autologin?";
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


