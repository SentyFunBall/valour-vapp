function doText(){
    //what else did you expect for this name?
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").innerHTML = code;

}

workspace.addChangeListener(doText);