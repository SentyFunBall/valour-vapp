/*
basic stricture:
                        message
                        /
ValourApp(aka client) < 
                        \
                         channel

*/
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
    getfrom(server) {
        //do api call with a dict of {message, author} please
        this.author = 1/*author*/
        this.content = 1/* content*/

    }

    sendTo(server, message){
        const message = {
            planet_Id: null,
            content: null,
            date: Date.UTC(),
            message: message
            /* idk im on too much pressure */
        }

        /* api call to send message */
    }
}