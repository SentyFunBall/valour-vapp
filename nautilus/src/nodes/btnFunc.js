const electron = require('electron');
const path = require('path');
const fs = require('fs');
const { type } = require('os');
const dialog = electron.remote.dialog;
const prompt = require('electron-prompt');
class NodeBlock{
    constructor (nodeName){
        this.editor = document.getElementById("editor") //main frame
        this.name = nodeName; // the name
        this.node = document.createElement("div");
        this.node.innerHTML = '<div id="'+nodeName+'-wrapper" class="wrapper" draggable="true" ondragstart="drag(event, \''+ nodeName +'-wrapper\')">\n <input type="checkbox" id="'+ nodeName + '-check" class="check" onclick="isChecked(\''+nodeName+'\')"/>\n<p>' + nodeName + '</p>\n<div id="'+ nodeName + '-blockly" class="blockly-div-wrapper">\n</div>';
        this.editor.innerHTML = this.node.innerHTML;
        this.position = [50,50];
        this.init();
    }
    init(){
        const options = { //the window options
            type: 'warning',
            buttons: ['new', 'import', 'cancel'],
            defaultId: 3,
            title: 'Warning',
            message: 'Are you going to create a new block or import a new one?',
            detail: 'all progress will be lost',
        }
        dialog.showMessageBox(null, options).then ((data) => {
            console.log(data.response);
            
            if(data.response == 0) {
                window.location.href = "./../create.html"; // go create a new one
            } else if (data.response == 1){ // to create a new node
                var xml;
                const filepath = dialog.showOpenDialogSync({ //sync because async cause a lot of problems
                    properties: ['openFile'],
                    filters: [
                        {
                            name: 'projects', extensions: ['xml']
                        } 
                    ]
                })
                console.log(filepath[0]);
                const xmly = fs.readFileSync(filepath[0]).toString();
                console.log(xmly);
                if (xmly.startsWith("<xml") && xmly.endsWith("</xml>")){            
                    xml = Blockly.Xml.textToDom(xmly);
                } else {
                    // if file couldn't be loaded
                }
        
        

                var workspace = Blockly.inject((this.name + '-blockly'),
                        {toolbox: document.getElementById('toolbox'),
                        grid:{
                            spacing: 20,
                            length: 3,
                            colour: '#ccc',
                            snap: true
                        },
                        zoom: //smol zoom goes brr
                            {controls: true,
                            wheel: true,
                            startScale: 0.1,
                            pinch: true},
                        trashcan: false
                        });
                Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
            }


        });
        
        
    }
}

const isChecked = (nodeName) =>{
    const state = document.getElementById((nodeName + "-check")).checked; // node chekbox state (returns true/false) 
    if (state){ //now magic
        console.log((nodeName + "-blockly")+ " open")
        document.getElementById((nodeName + "-blockly")).style.visibility = 'visible';
        document.getElementById((nodeName + "-blockly")).style.height = '150px';
    } else {
        console.log((nodeName + "-blockly")+ " close")
        document.getElementById((nodeName + "-blockly")).style.visibility = 'hidden';
        document.getElementById((nodeName + "-blockly")).style.height = '0px';
    }
}
const home = () =>{
    //opens an info box, and depending on user action, goes home.
    const options = {
        type: 'warning',
        buttons: ['Cancel', 'Yes'],
        defaultId: 2,
        title: 'Warning',
        message: 'Are you sure you want to go back home?',
        detail: 'All unsaved progress will be lost!',
    }

    dialog.showMessageBox(null, options).then ( (data) => {
        console.log(data.response);

        if(data.response == 1) {
            window.location.href = "./../home/start.html"
        }
    })
}

const run = () => {
    // tries the code, just dont do recursion pls
    try{
        eval(Blockly.JavaScript.workspaceToCode(workspace));
    } catch (e) {
        console_print(e);
    }
}

const save = () =>{
    dialog.showSaveDialog({
        title: 'Save as',
        defaultPath: path.join(__dirname, '../workspace/'),
        buttonLabel: 'Save',
        filters: [
            {
                name: 'xml',
                extensions: ['xml']
            }, ],
        properties: []
    }).then(file => {
        // if file was cancelled by the user, but why?
        //the workspace to code (js)
        if (!file.canceled) {
            fs.writeFile(file.filePath.toString(),
            Blockly.JavaScript.workspaceToCode(workspace), function (err) {
                if (err) throw err;
                // if saved
            });
            // this is ultra big pog brain moment, the workspace is going to dom, that goes to text(xml)
            // and that is the format we need
            var xml_text = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
            fs.writeFile(file.filePath.toString(),
                          xml_text, function (err) { if (err) throw err});
          }
    }).catch(err => {
        // if error
    });
}

const loadfiles = () => {
    dialog.showOpenDialog({properties: ['openFile'] }).then(function (response) {
        if (!response.canceled) {
        var xml = fs.readFileSync(response.filePaths[0]).toString();
        if (xml.startsWith("<xml") && xml.endsWith("</xml>")){            
            var yes = Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), workspace)
        } else {
            // if file couldn't be loaded
        }


        } else {
        // if no file were selected
        }
    });
}

const createNode = () => {
    prompt({
        title: 'New node',
        label: 'Name:',
        value: 'My Node',
        type: 'input'
    })
    .then((r) => {
        if(r === null) {
            // if user cancel
        } else {
            const pass = new NodeBlock(r); //TODO: pass this to nodes file
            console.log(pass.name);
            nodes.push(pass);
        }
    })
    .catch(console.error);
}
const getpos = (event, nodeName) => {
    const x = event.clientX;
    const y = event.clientY;
    const wrapper = document.getElementById((nodeName + '-wrapper'));
    wrapper.style.top = (y + "px;");
    wrapper.style.left = (x + "px;")
}
const drag = (ev, nm) => {
    console.log(ev.target.id + ' / ' + nm);
    ev.dataTransfer.setData("text", ev.target.id);
}

const allowDrop = (ev) => {
    ev.preventDefault();
}

const drop = (ev) => {
    ev.preventDefault();
    var node = ev.dataTransfer.getData("text");
    console.log(node);
    ev.target.appendChild(document.getElementById(node));
    node = document.getElementById(node)
    node.style.top = ev.pageY;
    node.style.left = ev.pageX;
}