function doText(){
    //what else did you expect for this name?

    //BTW, something here messes up on macOS. "this.nameDB_.populateVariables is not a function"
    const faces = [':)', ':P', ':O', ':l' , ':b']

    try {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById("code").innerHTML = code;
    } catch {
        try {
            const code = Blockly.JavaScript.blockToCode(workspace);
            document.getElementById("code").innerHTML = code;
        } catch (error) {
            document.getElementById("code").innerHTML = "There was an error generating your code.";
        }
    }
    if (document.getElementById("code").innerHTML == ""){
        document.getElementById("code").innerHTML = "// your code will appear here " + (faces[Math.floor(Math.random() * faces.length)])
    }

}
workspace.addChangeListener(doText);