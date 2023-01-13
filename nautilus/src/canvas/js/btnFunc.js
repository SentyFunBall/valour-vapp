const electron = require('electron');
const path = require('path');
const fs = require('fs');
const {dialog} = require('@electron/remote')
const prompt = require('electron-prompt');
const { fork } = require('child_process');
const { app } = require('@electron/remote');
const json = JSON.parse(fs.readFileSync(app.getPath('userData') + "/settings.json", "utf-8"));
//const blocks = require("../blocks.js")

const home = () => {
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
            window.location.href = "./../home/index.html"
        }
        
    })
}

const run = () => {
    // tries the code, just dont do recursion pls
    var timer = Date.now()
    try{
        //dude how do child processes work
        /*const ls = fork(Blockly.JavaScript.workspaceToCode(workspace));
        ls.on("exit", (code) => {
            document.getElementById("console").innerHTML += ('<div class="console-text">Code exited with code ' + code + '</div>');
        });
        ls.on("message", (message) => {
            document.getElementById("console").innerHTML += ('<div class="console-text">' + message + '</div>');
        });*/

        eval(Blockly.JavaScript.workspaceToCode(workspace)); //i love how unsafe this is
    } catch (e) {
        console.log("user err: "+e)
        blocks.console_print(e);
    }

    timer = Date.now() - timer;
    if (timer > 2000) {
        const options = {
            type: 'warning',
            buttons: ['Ok'],
            defaultId: 3,
            title: 'Warning',
            message: 'Your code took more than 2000ms to execute!',
            detail: 'Consider optimizing your code.',
        }
    
        dialog.showMessageBox(null, options).then ( (data) => {})
    }
}

const save = () =>{
    dialog.showSaveDialog({
        title: 'Save as',
        defaultPath: path.join(app.getPath('userData'), '/saves/'),
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
            fs.writeFile(file.filePath.toString(), xml_text, function (err) { if (err) throw err});
        
            //update titlebar
            var fullPath = file.filePath.toString();
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1, filename.length - 4);
            }

            let bar = document.getElementsByClassName("cet-window-title cet-center");
            bar[0].innerHTML = filename + ' - Nautilus';

            //update the settings file with the name of the file
            var keys = Object.keys(json["1"]["recents"]); //get the keys
            
            //delete the 10th element
            delete json['1']['recents']['10'];

            //save fist 9 elements
            const firstNine = keys.slice(0, 9).map(key => ({[key]: json['1']['recents'][key]}));

            //remove first 9
            keys.slice(0, 9).forEach(key => delete json['1']['recents'][key]);

            //add them back in to the end
            firstNine.forEach((obj, i) => Object.assign(json['1']['recents'], {[Number(Object.keys(obj)[0]) + 1]: obj[Object.keys(obj)[0]]}));

            //add current file as index 1
            console.log(json)
            json['1']['recents']['1'] = {filename:"", path:""}

            //assign values
            json['1']['recents']['1']['filename'] = filename
            json['1']['recents']['1']['path'] = file.filePath.toString()

            fs.writeFileSync(app.getPath('userData') + "/settings.json", JSON.stringify(json));
        }
    }).catch(err => {
        // if error
    });
}

const loadfiles = () => {
    //alerts user to save current file
    const options = {
        type: 'warning',
        buttons: ['Cancel', 'Yes'],
        defaultId: 2,
        title: 'Warning',
        message: 'Are you sure you want to load a new file?',
        detail: 'All unsaved progress will be lost!',
    }

    dialog.showMessageBox(null, options).then ( (data) => {

        if(data.response == 1) {
            dialog.showOpenDialog({properties: ['openFile'], defaultPath: path.join(app.getPath('userData'), '/saves/'), }).then(function (response) {
                if (!response.canceled) {
                    //get the file wooo
                    const xml = fs.readFileSync(response.filePaths[0]).toString();
                    //check if xml is valid
                    if (xml.startsWith("<xml") && xml.endsWith("</xml>")){          
                        //if valid, load it  
                        Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xml), workspace)

                        //set the title of the window to the name of the file (i dont fuckin know why its this complex)
                        var fullPath = response.filePaths[0].toString();
                        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                        var filename = fullPath.substring(startIndex);
                        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                            filename = filename.substring(1, filename.length - 4);
                        }

                        let bar = document.getElementsByClassName("cet-window-title cet-center");
                        bar[0].innerHTML = filename + ' - Nautilus';

                        //update the settings file with the name of the file
                        var keys = Object.keys(json["1"]["recents"]); //get the keys
                        
                        //delete the 10th element
                        delete json['1']['recents']['10'];

                        //save fist 9 elements
                        const firstNine = keys.slice(0, 9).map(key => ({[key]: json['1']['recents'][key]}));

                        //remove first 9
                        keys.slice(0, 9).forEach(key => delete json['1']['recents'][key]);

                        //add them back in to the end
                        firstNine.forEach((obj, i) => Object.assign(json['1']['recents'], {[Number(Object.keys(obj)[0]) + 1]: obj[Object.keys(obj)[0]]}));

                        //add current file as index 1
                        console.log(json)
                        json['1']['recents']['1'] = {filename:"", path:""}

                        //assign values
                        json['1']['recents']['1']['filename'] = filename
                        json['1']['recents']['1']['path'] = response.filePaths[0].toString()

                        fs.writeFileSync(app.getPath('userData') + "/settings.json", JSON.stringify(json));
                         
                    } else {
                        // if file couldn't be loaded
                        console.log("file not loaded");
                        const options = {
                            type: 'error',
                            buttons: ['Ok'],
                            defaultId: 2,
                            title: 'Error',
                            message: 'WHoops!',
                            detail: 'oop! the file isnt vaild! you sure you picked xml, and a nautilus made xml?',
                        }
                    
                        dialog.showMessageBox(null, options).then ( (data) => {
                            //uhhh
                        })
                    }

                } else {
                // if no file were selected
                }
            });
        } else {
            // if user canceled
        }
    })
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

const newFile = () => {
    const options = {
        type: 'warning',
        buttons: ['Cancel', 'Yes'],
        defaultId: 2,
        title: 'Warning',
        message: 'Are you sure you want to create a new file?',
        detail: 'All unsaved progress will be lost!',
    }

    dialog.showMessageBox(null, options).then ( (data) => {
        console.log(data.response);

        if(data.response == 1) {
            window.location.href = "./create.html"
        }
        
    })
}

const exportProject = () =>{
    dialog.showSaveDialog({
        title: 'Save as',
        defaultPath: app.getPath('userData')+"/exports/",
        buttonLabel: 'Save',
        filters: [
            {
                name: 'finished project',
                extensions: ['html']
            }, ],
        properties: []
    }).then(file => {
        if (!file.canceled) {
            const all_code = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button onclick="start()"> start code </button>
  <button onclick="end()"> stop code </button>
  <!-- if you are going to use this with something else copy between the two // -->
  <script>
  var canRun = false;
  const start = () => {
    canRun = true;
  }
  const end = () => {
    canRun = false;
  }

  if (canRun){
//from here \\/
  ${Blockly.JavaScript.workspaceToCode(workspace)}
//until here /\\  
}
  
  </script>
</body>
</html>
`;
            fs.writeFile(file.filePath.toString(),
            all_code, function (err) {
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