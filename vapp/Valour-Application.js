/*
basic stricture:
                        message
                        /
ValourApp(aka client) < 
                        \
                         channel


class ValourApp{
    constructor(bot_token){
        this.bot_token = bot_token
    }

    on_message_sent(func){
        func();
    }
}
class message{
    constructor(){
        this.author = "";
        this.content = "";
    }
    getfrom() {
        
        //do api call with a dict of {message, author} please
        this.author = 1 //author
        this.content = 1 // content

    }

    sendTo(server, message){
        const message = {
            planet_Id: null,
            content: null,
            date: Date.UTC(),
            message: message
            // idk im on too much pressure
        }

        // api call to send message 
    }
}
2021-03-03T11:25:31.376Z
2021-03-03T12:32:04.677Z
*/
var now = new Date;
var time = `${now.getUTCFullYear()}-${(now.getUTCMonth()+ 1)}-${(now.getUTCDate())}T${(now.getUTCHours())}:${(now.getUTCMinutes() + 1 )}:${(now.getUTCSeconds() + 1)}.${now.getUTCMilliseconds()}Z`
const get = () => {
    var req = new Request("https://valour.gg", {
        method: "SEND",
        body:{
            "Planet_Id":735703679107072,
            "Id":0,
            "Author_Id":735182334984297,
            "Content":"testes",
            "TimeSent": time,
            "Channel_Id":735703679107074,
            "Message_Index":0
        }
    });

    fetch(req)
    .then(response => console.log(response.status))
    .catch(console.log(time))

}