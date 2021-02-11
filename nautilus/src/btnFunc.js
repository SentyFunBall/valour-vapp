const electron = require('electron');
const path = require('path');
const fs = require('fs');
const { type } = require('os');
const dialog = electron.remote.dialog;
const prompt = require('electron-prompt');
function home(){
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
    })
}

function run(){
    // tries the code, just dont do recursion pls
    try{
        eval(Blockly.JavaScript.workspaceToCode(workspace));
        console.log("no errors, nice.")
    } catch (e) {
        console.log(e);
        console.log("just errors, nothing too much to worry about :)")
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

function createVar(){
    prompt({
        title: 'New variable',
        label: 'Name:',
        value: 'My Variable',
        type: 'input'
    })
    .then((r) => {
        if(r === null) {
            console.log('user cancelled');
        } else {
            workspace.createVariable(r);
        }
    })
    .catch(console.error);
}
