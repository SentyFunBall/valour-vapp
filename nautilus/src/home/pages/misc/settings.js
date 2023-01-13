window.addEventListener("load", (event) => {
    const { app } = require('@electron/remote');
    const fs = require('fs');
    var settings = JSON.parse(fs.readFileSync(app.getPath('userData') + "/settings.json", 'utf8'));

    var email
    var pass
    var confirm
    var errText
    var delButton 

    email = document.getElementById("email");
    pass = document.getElementById("pass");
    confirm = document.getElementById("confirm");
    errText = document.getElementById("errText");
    delButton = document.getElementById("delete");

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
        fs.writeFile(app.getPath('userData') + 'settings.json', JSON.stringify(settings), (err) => {
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
        fs.writeFile(app.getPath('userData') + 'settings.json', JSON.stringify(settings), (err) => {
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

    function getRecents() {
        //get the raw recent files data
        let recents = settings['1'].recents;
        //put the data into an array
        let recentFiles = [];
        for(let i = 0; i < recents.length; i++) {
            recentFiles.push(recents[i]);
        }
        //sort the array by date
        recentFiles.sort(function(a, b) {
            return b.date - a.date;
        });
        //create a div for each file
        let recentDiv = document.getElementById("recent");
        for(let i = 0; i < recentFiles.length; i++) {
            let div = document.createElement("div");
            div.className = "recentFile";
            div.innerHTML = recentFiles[i].name;
            div.addEventListener("click", function() {
                window.location.assign("../index.html?file="+recentFiles[i].path);
            });
            recentDiv.appendChild(div);
        }
    }
})
