const electron = require('electron'); 
const path = require('path'); 
const fs = require('fs'); 
const dialog = electron.remote.dialog; 
  
var save = document.getElementById('save'); 
  
save.addEventListener('click', (event) => { 
    dialog.showSaveDialog({ 
        title: 'Select the File Path to save', 
        defaultPath: path.join(__dirname, '../assets/sample.txt'), 
        buttonLabel: 'Save',  
        filters: [ 
            { 
                name: 'Text Files', 
                extensions: ['txt', 'docx'] 
            }, ], 
        properties: [] 
    }).then(file => { 
        console.log(file.canceled); 
        if (!file.canceled) { 
            console.log(file.filePath.toString());  
            fs.writeFile(file.filePath.toString(),  
                         'This is a Sample File', function (err) { 
                if (err) throw err; 
                console.log('Saved!'); 
            }); 
        } 
    }).catch(err => { 
        console.log(err) 
    }); 
}); 