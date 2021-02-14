const electron = require('electron');
const path = require('path');
const fs = require('fs');
const { type } = require('os');
const dialog = electron.remote.dialog;
const prompt = require('electron-prompt');

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
            window.location.href = "./start.html"
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
            const xml_text = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
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
        const xml = fs.readFileSync(response.filePaths[0]).toString();
        if (xml.startsWith("<xml") && xml.endsWith("</xml>")){            
            Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), workspace)
        } else {
            // if file couldn't be loaded
        }


        } else {
        // if no file were selected
        }
    });
}

const createVar = () => {
    prompt({
        title: 'New variable',
        label: 'Name:',
        value: 'My Variable',
        type: 'input'
    })
    .then((r) => {
        if(r === null) {
            // if user cancel
        } else {
            workspace.createVariable(r);
        }
    })
    .catch(console.error);
}

