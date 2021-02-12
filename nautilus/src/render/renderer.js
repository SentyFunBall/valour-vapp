const { BrowserWindow } = require('electron');
const path = require('path');
class renderer{
    constructor(settings){
        this.settings = settings
        this.elements = [];
        this.init()
    }
    /*
    {
        size: [x, y]
        color: "#000000"
    }
    */
    appendElements(element){
        this.elements.push(element)
    }
    init(){
        const window = new BrowserWindow({
            width: this.settings[0][0], //Window width
            height: this.settings[0][1], //Window height
        })
        window.open(path.join(__dirname, 'base.html'),'screen');
        document.getElementById("body").style.backgroundColor = this.settings[1];
    }
    run(to_stop){ // to stop always will return true, just not
        var trigger = true;
        while (trigger){
            trigger = to_stop();
            for(i = 0; i < this.elements.length; i++) {
                this.elements[i].update()
            }   
        }
    }
}