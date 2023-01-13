const { app } = require('@electron/remote');
function getToken() {
    let json = require(app.getPath('userData') + '/settings.json');
    askToken();
    var bot = 1;
    return json[bot].token;
}

function getInfo(userToken) {
    let json = require(app.getPath('userData') + '/settings.json');
    askInfo(userToken);
    var mainInfo = '';
    try {
        mainInfo = 'id: '+json['1']['info']['data']['id']+ ', username: '+json['1']['info']['data']['username']+', bot: '+json['1']['info']['data']['bot']+', state: '+json['1']['info']['data']['userState']['name'];
    } catch (err) {
        mainInfo = "Failed to log in to Valour. Check log in settings, or try again."
        console.log(err)
    }
    return mainInfo;
}

async function askToken() {
    let json = require(app.getPath('userData') + '/settings.json');
    var bot = 1;
    var Email = json[bot].emailText;
    var Password = json[bot].passText;
    var dcd= new TextDecoder()
    var info = JSON.parse(dcd.decode((await fetch(`https://valour.gg/User/RequestStandardToken?email=${Email}&password=${Password}`).then(response =>response.body.getReader().read()))["value"]))["data"]
    json[bot].token = info;
    fs.writeFile(app.getPath('userData')+'/settings.json', JSON.stringify(json), (err) => {
        if (err) console.log('Couldnt save settings!');
    });
}

async function askInfo(token) {
    let json = require(app.getPath('userData') + '/settings.json');
    var dcd= new TextDecoder()
    var userInfo= JSON.parse(dcd.decode((await fetch(`https://valour.gg/User/GetUserWithToken?token=${token}`).then(response =>response.body.getReader().read()))["value"]))
    json[1].info = userInfo;
    fs.writeFile(app.getPath('userData')+ '/settings.json', JSON.stringify(json), (err) => {
        if (err) console.log('Couldnt save settings!');
    });
}

function startBot(planet, channel){
    //yes im copy pasting code from microsofts website dont @ me
    connection.onclose(start);

    // Start the connection.
    start();
    setTimeout(function() {
        connectToPlanet(planet, channel);
    }, 5000)
}

const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://valour.gg/planethub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};
async function connectToPlanet(planet, channel) {
    console.log("Connecting to planet");
    console.log("Connecting to "+planet+", "+channel);
    let json = require(app.getPath('userData') + '/settings.json');
    let token = json[1].token;

    connection.send("JoinPlanet", planet, token)
    connection.send("JoinChannel", channel, token)
    console.log("Connected! Bot active hopefully.")
}

function send_message(content, author, path) {
    console.log("hello - valour.js")
}
function message_get(get) {

}
function role_add(name, member) {
    
}
function role_remove (name, member) {

}

function kick (member, reason) {

}
function ban (member, reason) {

}
function get_value (value, from) {

}
function message_author () {

}
function message_info (info) {

}
function info_planet () {

}
function info_channel () {

}
function message_id (id) {
    
}