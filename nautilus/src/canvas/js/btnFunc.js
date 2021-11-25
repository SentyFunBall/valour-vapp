const electron = require('electron');
const path = require('path');
const fs = require('fs');
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
            window.location.href = "./../home/index.html"
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
            var fullPath = file.filePath.toString();
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                document.title = filename + ' - Nautilus';
    }).catch(err => {
        // if error
    });
}

const loadfiles = () => {
    dialog.showOpenDialog({properties: ['openFile'] }).then(function (response) {
        if (!response.canceled) {
            //get the file wooo
            const xml = fs.readFileSync(response.filePaths[0]).toString();
            //check if xml is valid
            if (xml.startsWith("<xml") && xml.endsWith("</xml>")){          
                //if valid, load it  
                Blockly.Xml.appendDomToWorkspace(Blockly.Xml.textToDom(xml), workspace)

                //set the title of the window to the name of the file (i dont fuckin know why its this complex)
                var fullPath = response.filePaths[0].toString();
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
                document.title = filename + ' - Nautilus';;
            } else {
                // if file couldn't be loaded
                console.log("file not loaded");
                const options = {
                    type: 'error',
                    buttons: ['Ok'],
                    defaultId: 2,
                    title: 'Error',
                    message: 'WHoops!',
                    detail: 'oh uh there was some kind of error. idk maybe the file is corrupted',
                }
            
                dialog.showMessageBox(null, options).then ( (data) => {
                    //uhhh
                })
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

const exportProject = () =>{
    dialog.showSaveDialog({
        title: 'Save as',
        defaultPath: __dirname,
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