const fs = require('fs');
const { parse } = require('path');
var settings = JSON.parse(fs.readFileSync(__dirname + "/misc/settings.json", 'utf8'));

var email = document.getElementById("email");
var pass = document.getElementById("pass");
var confirm = document.getElementById("confirm");
var errText = document.getElementById("errText");
var delButton = document.getElementById("delete");

var emailText = '';
var passText = '';
var bot = 0;

if (Object.keys(emailText).length == null || Object.keys(emailText).length == 0) {
    bot = 1
} else {
    bot = Object.keys(emailText).length + 1;
}
confirm.addEventListener("click",function() {
    console.log("attempting to save")
    emailText = email.innerHTML;
    passText = pass.innerHTML;

    if(!settings[bot]) settings[bot] = {
        emailText: null,
        passText: null,
        token: null,
        info: null,
    };
    settings[bot].emailText = emailText;
    settings[bot].passText = passText;
    fs.writeFile(__dirname + '/misc/settings.json', JSON.stringify(settings), (err) => {
        if (err) {
            console.log('Couldnt save settings!');
            errText.innerHTML = "There was an error saving. Please try again. Err:"+err;
        } else {
            window.location.assign('../index.html')
        }
    });
    
})

delButton.addEventListener("click",function() {
    settings[bot].emailText = null;
    settings[bot].passText = null;
    settings[bot].token = null;
    settings[bot].info = null;
    errText.innerHTML = "All data erased."
    setTimeout(function() {
        errText.innerHTML = '';
    }, 5000);
})