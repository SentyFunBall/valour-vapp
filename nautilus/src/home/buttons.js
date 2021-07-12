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
    window.location.href="../index.html"
}