function doText(){
    //what else did you expect for this name?
    const faces = [':)', ':P', ':O', ':l' , ':b', ':D', ':|', ':(', 'xD', ':3' , ';P', '' , 'please god help end the suffering of coding in javascript on a 2008 laptop'];

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").innerHTML = code;
    if (document.getElementById("code").innerHTML == ""){
        document.getElementById("code").innerHTML = "// your code will appear here " + (faces[Math.floor(Math.random() * faces.length)])
    }

}
workspace.addChangeListener(doText);