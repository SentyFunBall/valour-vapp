let shell = require('electron').shell

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
    var settings = JSON.parse(fs.readFileSync(__dirname + "/misc/settings.json", 'utf8'));
    settings['1']['setup'] = true;

    fs.writeFile(__dirname + '/misc/settings.json', JSON.stringify(settings), (err) => {
        if (err) {
            console.log('Couldnt save settings!');
        } else {
            window.location.assign('../index.html')
        }
    });
}