var email = document.getElementById("emailVisual");
var info = document.getElementById("infoVis");

let json = require(__dirname + "/misc/settings.json");

if (json['1'].emailText == null) {
    email.innerHTML = 'There does not appear to be an email connected to Nautilus.'
} else {
    email.innerHTML = json['1']['emailText'];
    info.innerHTML = 'id: '+json['1']['info']['data']['id']+ ', username: '+json['1']['info']['data']['username']+', bot: '+json['1']['info']['data']['bot']+', state: '+json['1']['info']['data']['userState']['name'];
}