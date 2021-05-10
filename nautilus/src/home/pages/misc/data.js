var email = document.getElementById("emailVisual");

let json = require(__dirname + "/misc/settings.json");
console.log(json, emailText);

var bot = 1;
var emailSaved = json[bot].emailText;
var emailText;

if (json[bot].emailText == null) {
    email.innerHTML = 'There does not appear to be an email connected to Nautilus.'
} else {
    email.innerHTML = emailSaved
}