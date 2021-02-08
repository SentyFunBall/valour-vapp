const remote = require('remote'); // Load remote compnent that contains the dialog dependency
const dialog = remote.require('dialog'); // Load the dialogs component of the OS
const fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

var load = document.getElementById('load'); 
save.addEventListener('click', (event) => { 
    dialog.showOpenDialog((fileNames) => {
        // fileNames is an array that contains all the selected
        if(fileNames === undefined){
            console.log("No file selected");
            return;
        }

        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            // Change how to handle the file content
            Blockly.Xml.clearWorkspaceAndLoadFromXml(data, workspace)
            console.log("The file content is : " + data);
        });
    });
});