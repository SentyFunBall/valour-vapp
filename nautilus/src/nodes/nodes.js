const electron = require('electron');
class NodeBlock{
    constructor (nodeName){
        this.editor = document.getElementById("editor")
        this.name = nodeName;
        this.node = document.createElement("div");
        this.node.innerHTML = '<div id="'+nodeName+'-wrapper" class="wrapper" draggable="true">\n <input type="checkbox" id="'+ nodeName + '-check" class="check" onclick="isChecked(\''+nodeName+'\')"/>\n<p>' + nodeName + '</p>\n<div id="'+ nodeName + '-blockly" class="blockly-div-wrapper">\n</div>';
        this.editor.innerHTML = this.node.innerHTML;
        this.position = [50,50];
        this.init();
    }
    setPosition(position){
        const wrapper = document.getElementById((this.name + '-wrapper'));
        wrapper.style.top= position[0] + "%";
        wrapper.style.left= position[1] + "%";
    }
    init(){
        const options = {
            type: 'warning',
            buttons: ['new', 'create', 'cancel'],
            defaultId: 3,
            title: 'Warning',
            message: 'Are you going to create a new block or import a new one?',
            detail: 'all progress will be lost',
        }
        dialog.showMessageBox(null, options).then ( (data) => {
            console.log(data.response);
    
            if(data.response == 0) {
                window.location.href = "./../create.html";
            } else if (data.response == 1){
                /* 
                * do file loading
                */
                var workspace = Blockly.inject((this.name + '-blockly'),
                        {toolbox: document.getElementById('toolbox'),
                        grid:{
                            spacing: 20,
                            length: 3,
                            colour: '#ccc',
                            snap: true
                        },
                        trashcan: false
                        }
                        );
                workspace.
            }


        })
        
        
    }
}

const isChecked = (nodeName) =>{
    const state = document.getElementById((nodeName + "-check")).checked; // node chekbox state (returns true/false)
    if (state){
        console.log((nodeName + "-blockly")+ " open")
        document.getElementById((nodeName + "-blockly")).style.visibility = 'visible';
        document.getElementById((nodeName + "-blockly")).style.height = '150px';
    } else {
        console.log((nodeName + "-blockly")+ " close")
        document.getElementById((nodeName + "-blockly")).style.visibility = 'hidden';
        document.getElementById((nodeName + "-blockly")).style.height = '0px';
    }
}