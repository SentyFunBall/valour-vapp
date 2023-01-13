let shell = require('electron').shell
const {app} = require('@electron/remote')

var codex = document.getElementById("codex");
var git = document.getElementById("git");
var wiki = document.getElementById("wiki");
var docs = document.getElementById("docs");
var tuts = document.getElementById("tuts");
var dics = document.getElementById("disc");

//what the hell is this code

codex.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});
git.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});
wiki.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});
docs.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});
tuts.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});
dics.addEventListener("click", function(event) {
    if (event.target.tagName === 'A' && event.target.href.startsWith('http')) {
        event.preventDefault();
        shell.openExternal(event.target.href);
    }
});

function openQues1() {
    document.getElementById("ques1").style.display = "block";
    document.getElementById("startPage").style.display = "none"
}
function openLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("ques1").style.display = "none"
}
function no() {
    const fs = require('fs');
    var settings = JSON.parse(fs.readFileSync(app.getPath('userData') + "/settings.json", 'utf8'));
    settings['1']['setup'] = true;

    fs.writeFile(app.getPath('userData') + '/settings.json', JSON.stringify(settings), (err) => {
        if (err) {
            console.log('Couldnt save settings!');
        } else {
            window.location.assign('../index.html')
        }
    });
}

var recent = document.getElementById("recent")

let json = require(app.getPath('userData') + "/settings.json");

for (const prop in json['1']['recents']) {
    recent.innerHTML += "<a href=\"\">"+json['1']['recents'][prop]["filename"]+"</a><br><br>"
}