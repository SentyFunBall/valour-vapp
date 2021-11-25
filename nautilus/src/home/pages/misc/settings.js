const fs = require('fs');
var settings = JSON.parse(fs.readFileSync(__dirname + "/misc/settings.json", 'utf8'));

var email = document.getElementById("email");
var pass = document.getElementById("pass");
var confirm = document.getElementById("confirm");
var errText = document.getElementById("errText");
var delButton = document.getElementById("delete");

var emailText = '';
var passText = '';

confirm.addEventListener("click",function() {
    console.log("attempting to save")
    emailText = email.innerHTML;
    passText = pass.innerHTML;

    if(!settings['1']) settings['1'] = {
        emailText: null,
        passText: null,
        token: null,
        info: null,
        setup: false,
    };
    settings['1']['emailText'] = emailText;
    settings['1']['passText'] = passText;
    settings['1']['setup'] = true;
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
    settings['1'].emailText = null;
    settings['1'].passText = null;
    settings['1'].token = null;
    settings['1'].info = null;
    settings['1'].setup = false;
    fs.writeFile(__dirname + '/misc/settings.json', JSON.stringify(settings), (err) => {
        if (err) {
            console.log('Couldnt save settings!');
        }
    })
    errText.innerHTML = "All data erased."
    setTimeout(function() {
        errText.innerHTML = '';
    }, 5000);
})

document.getElementById("platform").innerHTML = process.platform;