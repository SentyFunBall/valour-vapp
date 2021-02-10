const electron = require('electron');
const path = require('path');
const fs = require('fs');
const dialog = electron.remote.dialog;

function run(){
    // tries the code, just dont do recursion pls
    try{
        eval(Blockly.JavaScript.workspaceToCode(workspace));
    } catch (e) {
        console.log(e);
    }
}


function save(){
    console.log("Opening save dialog")
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
        console.log(file.canceled);
        //the workspace to code (js)
        if (!file.canceled) {
            console.log(file.filePath.toString());
            fs.writeFile(file.filePath.toString(),
            Blockly.JavaScript.workspaceToCode(workspace), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            // this is ultra big pog brain moment, the workspace is going to dom, that goes to text(xml)
            // and that is the format we need
            var xml_text = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
            fs.writeFile(file.filePath.toString(),
                          xml_text, function (err) { if (err) throw err});
          }
    }).catch(err => {
        console.log(err)
        dialog.showErrorBox("There was an error saving: ",err)
    });
}

function loadfiles(){
    console.log("Opening open dialog")
    dialog.showOpenDialog({properties: ['openFile'] }).then(function (response) {
        if (!response.canceled) {
        var xml = fs.readFileSync(response.filePaths[0]).toString();
        console.log("" + xml);
        if (xml.startsWith("<xml") && xml.endsWith("</xml>")){            
            var yes = Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), workspace);
            console.log("oh yes, loaded");
        } else {
            console.log("file couldn't be loaded ):")
        }


        } else {
        console.log("no file selected");
        }
    });
}