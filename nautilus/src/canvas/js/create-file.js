//Includes
const electron = require('electron'); 
const path = require('path'); 
const fs = require('fs'); 
const dialog = electron.remote.dialog; 

//Save element
var save = document.getElementById('save'); 

//Add an event listenter to the save button
save.addEventListener('click', (event) => { 
    dialog.showSaveDialog({ //Show save file dialog
        title: 'Select the file path to save to', //Window title
        defaultPath: path.join(app.getPath('userData'), '/saves/'), //Default file path 
        buttonLabel: 'Save', //Button label
        filters: [ //Extension filters
            { 
                name: 'VAPP Files', 
                extensions: ['vapp'] 
            }, ], 
        properties: [] 
    }).then(file => { //After window closed
        console.log(file.canceled); 
        if (!file.canceled) { //If the file saving wasn't canceled...
            console.log(file.filePath.toString());  
            fs.writeFile(file.filePath.toString(),  //...write the file to disk at the specified directory
                         'This is a Sample File', function (err) { 
                if (err) throw err; //Error handing
                console.log('Saved!'); 
            }); 
        } 
    }).catch(err => { //More error handling
        console.log(err) 
    }); 
}); 