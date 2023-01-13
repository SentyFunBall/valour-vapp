import './js/Valour.js';

//Future reference: dont.delete.this.
//do not delete this
//dont delete this
//do you want to delete this?
//dont!
//anyway, please use ctrl+f to find the code you want, its a mess here.

Blockly.Blocks['token_auth'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get token");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Uses email and password from settings");
   this.setHelpUrl("");
    }
  };

//Valour blocks
Blockly.Blocks['send_message'] = {
init: function() {
    this.appendValueInput("content")
        .setCheck("String")
        .appendField("Message content:");
    this.appendValueInput("author")
        .setCheck(null)
        .appendField("Token:");
    this.appendValueInput("path")
        .setCheck("String")
        .appendField("Message path:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
this.setTooltip("Send the message.");
this.setHelpUrl("");
}
};

Blockly.Blocks['message_get'] = {
init: function() {
    this.appendValueInput("get")
        .setCheck(null)
        .appendField("Message received:");
    this.appendStatementInput("no")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
this.setTooltip("Start of a code block, executes when a message is caught.");
this.setHelpUrl("");
}
};

Blockly.Blocks['role_add'] = {
init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("Role to add:");
    this.appendValueInput("member")
        .setCheck(null)
        .appendField("Member to put role on:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['role_remove'] = {
init: function() {
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("Role to remove:");
    this.appendValueInput("member")
        .setCheck(null)
        .appendField("Member to remove role from:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['kick'] = {
init: function() {
    this.appendValueInput("member")
        .setCheck(null)
        .appendField("Member to kick:");
    this.appendValueInput("reason")
        .setCheck(null)
        .appendField("Reason:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['ban'] = {
init: function() {
    this.appendValueInput("member")
        .setCheck(null)
        .appendField("Member to ban:");
    this.appendValueInput("reason")
        .setCheck(null)
        .appendField("Reason:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['get_value'] = {
init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("Value to get:");
    this.appendValueInput("from")
        .setCheck(null)
        .appendField("Get value from:");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['message_author'] = {
init: function() {
    this.appendDummyInput()
        .appendField("Author");
    this.setOutput(true, null);
    this.setColour(120);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['message_info'] = {
init: function() {
    this.appendValueInput("info")
        .setCheck(null)
        .appendField("Message part:");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['info_planet'] = {
init: function() {
    this.appendDummyInput()
        .appendField("Planet");
    this.setOutput(true, null);
    this.setColour(120);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['info_channel'] = {
init: function() {
    this.appendDummyInput()
        .appendField("Channel");
    this.setOutput(true, null);
    this.setColour(120);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['message_id'] = {
init: function() {
    this.appendValueInput("id")
        .setCheck(null)
        .appendField("Message ID:");
    this.setOutput(true, null);
    this.setColour(160);
this.setTooltip("");
this.setHelpUrl("");
}
};
Blockly.Blocks['console_print'] = {
init: function() {
    this.appendValueInput("to_print")
        .setCheck(null)
        .appendField("Print to console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
this.setTooltip("prints to console");
this.setHelpUrl("");
}
};
Blockly.Blocks['clear_console'] = {
init: function() {
    this.appendDummyInput()
        .appendField("Clear Console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
this.setTooltip("clears the console");
this.setHelpUrl("");
}
};
Blockly.Blocks['eval'] = {
init: function() {
    this.appendValueInput("eval")
        .setCheck(null)
        .appendField("evaluate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
this.setTooltip("runs a string as code");
this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval");
}
};
Blockly.Blocks['input'] = {
init: function() {
    this.appendDummyInput()
        .appendField("input");
    this.setOutput(true, null);
    this.setColour(160);
this.setTooltip("Gets the most recent user input");
this.setHelpUrl("https://sentyfunball.github.io/valour-vapp/wiki.html#:~:text=input%3A%20Get%20the%20most%20recent%20input%20from%20the%20mini%20console.");
}
};
Blockly.Blocks['cast'] = {
init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("make");
    this.appendDummyInput()
        .appendField("as a")
        .appendField(new Blockly.FieldDropdown([["number","int"], ["text","string"]]), "types");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
this.setTooltip("cast a variable into a type");
this.setHelpUrl("https://www.w3schools.com/js/js_type_conversion.asp");
}
};
Blockly.Blocks['timer_start'] = {
init: function() {
    this.appendValueInput("variable")
        .setCheck(null)
        .appendField("start timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
this.setTooltip("start the timer. Must provide variable");
this.setHelpUrl("");
}
};
Blockly.Blocks['timer_end'] = {
init: function() {
    this.appendValueInput("variable")
        .setCheck(null)
        .appendField("end timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
this.setTooltip("end the timer. Must provide variable");
this.setHelpUrl("");
}
};
Blockly.Blocks['timer_wait'] = {
init: function() {
    this.appendValueInput("variable")
        .setCheck(null)
        .appendField("wait");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
this.setTooltip("Wait the time in milliseconds.");
this.setHelpUrl("");
}
};
Blockly.Blocks['timer_do_until'] = {
init: function() {
    this.appendValueInput("variable")
        .setCheck("Boolean")
        .appendField("do until");
    this.appendStatementInput("code")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
this.setTooltip("while() loop. Runs the code inside as long as the condition is true. while(true) freezes the program.");
this.setHelpUrl("https://www.w3schools.com/js/js_loop_while.asp");
}
};
Blockly.Blocks['startbot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Start bot");
      this.appendValueInput("planet")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Planet");
      this.appendValueInput("channel")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Channel");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
   this.setTooltip("Starts the bot, and listens to the given planet and channel IDs for messages");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['timeout'] = {
    init: function() {
      this.appendValueInput("time")
          .setCheck("Number")
          .appendField("after");
      this.appendDummyInput()
          .appendField("milliseconds, do");
      this.appendStatementInput("function")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("setTimeout() function. after x milliseconds, it will execute whatever is inside it.");
   this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/setTimeout");
    }
  };
  Blockly.Blocks['embed'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set")
          .appendField(new Blockly.FieldVariable("embed"), "NAME")
          .appendField("To:");
      this.appendValueInput("text")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Title");
      this.appendValueInput("button")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Button");
      this.appendValueInput("link")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Link");
      this.appendValueInput("image")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Image");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
   this.setTooltip("Make a Valour embed.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['get_info'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get Info   Token:")
          .appendField(new Blockly.FieldVariable("token"), "token");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("Returns user info, and saves it to disk. Will throw error if token is null");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['waitforinput'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Wait for input");
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour(160);
   this.setTooltip("Waits for user input, and returns it");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['alert'] = {
    init: function() {
      this.appendValueInput("alert")
          .setCheck("String")
          .appendField("Alert");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("Creates a pop up.");
   this.setHelpUrl("https://www.w3schools.com/jsref/met_win_alert.asp");
    }
  };
  
  Blockly.Blocks['throw'] = {
    init: function() {
      this.appendValueInput("throw")
          .setCheck("String")
          .appendField("Throw");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setColour(160);
   this.setTooltip("Throws an error. Often used in funcions or try/catch statements");
   this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw");
    }
  };
  
  Blockly.Blocks['try_catch'] = {
    init: function() {
      this.appendStatementInput("try")
          .setCheck(null)
          .appendField("Try");
      this.appendValueInput("error")
          .setCheck(null)
          .appendField("Error:");
      this.appendStatementInput("catch")
          .setCheck(null)
          .appendField("Catch");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("Tries running the code inside try. If an error is thrown, catch(error) is run. Must provide error argument.");
   this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch");
    }
  };

//Valour code gens

Blockly.JavaScript['try_catch'] = function(block) {
    const statements_try = Blockly.JavaScript.statementToCode(block, 'try');
    const value_name = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
     
    const code = 'try { \n'+ statements_try +'} catch ('+ value_name +'){\n'+ statements_catch +'} \n';
    return code;
};
Blockly.JavaScript['startbot'] = function(block) {
    var value_planet = Blockly.JavaScript.valueToCode(block, 'planet', Blockly.JavaScript.ORDER_ATOMIC);
    var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'startBot('+value_planet+', '+value_channel+');\n';
    return code;
  };
Blockly.JavaScript['token_auth'] = function(block) {
    var code = 'getToken()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


Blockly.JavaScript['get_info'] = function(block) {
    var variable_token = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('token'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'getInfo('+variable_token+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
Blockly.JavaScript['send_message'] = function(block) {
var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
var value_author = Blockly.JavaScript.valueToCode(block, 'author', Blockly.JavaScript.ORDER_ATOMIC);
var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.send_message(content, author, path)\n';
return code;
};
Blockly.JavaScript['message_get'] = function(block) {
var value_get = Blockly.JavaScript.valueToCode(block, 'get', Blockly.JavaScript.ORDER_ATOMIC);
var statements_no = Blockly.JavaScript.statementToCode(block, 'no');
 
const code = 'Valour.message_get('+value_get+');\n'
return code;
};

//dont let jacob see this part

Blockly.JavaScript['role_add'] = function(block) {
var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.role_add('+value_name+', '+value_member+');\n';
return code;
};

Blockly.JavaScript['role_remove'] = function(block) {
var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.role_remove('+value_name+', '+value_member+');\n';
return code;
};

Blockly.JavaScript['kick'] = function(block) {
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.kick('+value_member+', '+value_reason+');\n';
return code;
};

Blockly.JavaScript['ban'] = function(block) {
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.ban('+value_member+', '+value_reason+');\n';
return code;
};

Blockly.JavaScript['get_value'] = function(block) {
var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.get_value('+value_value+', '+value_from+');\n';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_author'] = function(block) {
 
const code = 'Valour.message_author();\n';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_info'] = function(block) {
var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.message_info('+value_info+');\n';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_planet'] = function(block) {
 
const code = 'Valour.info_planet();\n';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_channel'] = function(block) {
 
const code = 'Valour.info_channel();\n';

return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_id'] = function(block) {
var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.message_id('+value_id+');\n';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['console_print'] = function(block) {
var value_to_print = Blockly.JavaScript.valueToCode(block, 'to_print', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'console_print('+value_to_print+');\n';
return code;
};
Blockly.JavaScript['clear_console'] = function(block) {
 
const code = 'clear_console();\n';
return code;
};
Blockly.JavaScript['throw'] = function(block) {
var value_to_print = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'throw '+value_to_print+';\n';
return code;
};
Blockly.JavaScript['eval'] = function(block) {
var value_eval = Blockly.JavaScript.valueToCode(block, 'eval', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'eval('+value_eval+');\n';
return code;
};
Blockly.JavaScript['input'] = function(block) {
var sync = Blockly.JavaScript.valueToCode(block, 'sync', Blockly.JavaScript.ORDER_ATOMIC); 
var code = 'input()';
 
return [code, Blockly.JavaScript.ORDER_ASSIGNMENT];
};
Blockly.JavaScript['cast'] = function(block) {
var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
var drop = block.getFieldValue('types');
 
var code;
if(drop == 'int'){
    code = 'Number(' + value_name + ')';
} else if (drop = 'string'){
    code = "String(" + value_name + ')';
}
return [code, Blockly.JavaScript.ORDER_ASSIGNMENT];
};
Blockly.JavaScript['timer_start'] = function(block) {
var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = value_variable +' = Date.now();\n';
return code;
};
Blockly.JavaScript['timer_end'] = function(block) {
    var varb = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
     
    const code = varb + ' = Date.now() - ' + varb + ';\n';
    return code;
};
Blockly.JavaScript['timer_wait'] = function(block) {
    var value = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
     
    var code = 'sleep('+ value +');\n';
    return code;
};
Blockly.JavaScript['timer_do_until'] = function(block) {
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
     
    const code = 'do {\n'+statements_code+'} while ('+ value_variable+');\n';
    return code;
};
Blockly.JavaScript['timeout'] = function(block) {
    const value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_function = Blockly.JavaScript.statementToCode(block, 'function');
    
    const code = `setTimeout(() => {\n${statements_function}\n}, ${value_time});\n`;
    return code;
  };
  Blockly.JavaScript['embed'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_button = Blockly.JavaScript.valueToCode(block, 'button', Blockly.JavaScript.ORDER_ATOMIC);
    var value_link = Blockly.JavaScript.valueToCode(block, 'link', Blockly.JavaScript.ORDER_ATOMIC);
    var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC);
    //~~fuck why cant this be easier~~
    var code = 'var '+variable_name+" = new Valour.createEmbed()\n"+variable_name+'.addText('+value_text+', inline=true);\n'+variable_name+'.addButton("'+value_button+'", background="0x00000");\n'+variable_name+'.addLink("'+value_link+'", alias="Link");\n'+variable_name+'.addImage("'+value_image+'", alt="Image");\n'+variable_name+'.toSring();\n';
    return code;
  };

  Blockly.JavaScript['waitforinput'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'waitForInput()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['alert'] = function(block) {
    var value_alert = Blockly.JavaScript.valueToCode(block, 'alert', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'alert('+value_alert+');\n';
    return code;
  };
  
  Blockly.JavaScript['throw'] = function(block) {
    var value_throw = Blockly.JavaScript.valueToCode(block, 'throw', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'throw '+value_throw+';\n';
    return code;
  };
  
  Blockly.JavaScript['try_catch'] = function(block) {
    var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
    var value_error = Blockly.JavaScript.valueToCode(block, 'error', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
    // TODO: Assemble JavaScript into code variable.
    var code = 'try {\n'+statements_try+'} catch ('+value_error+') {\n'+statements_catch+'}\n';
    return code;
};

// helper functions
let node = document.getElementById("textarea");
let userConsole = document.getElementById("console");
window.addEventListener("load", (event) => {
    if(!node){node = document.getElementById("textarea")}
    if(!userConsole){userConsole = document.getElementById("console")}
    node.addEventListener("keydown", (event) => { add_user_text(event) });
    console.log("Ready!")
});
const console_print = (to_print) =>{
    console.log("a")
    userConsole.innerHTML += ('<div class="console-text">' + to_print + '</div>');
}
const clear_console = () =>{
    userConsole.innerHTML = "";
    inputVar = '';
}
const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var inputVar = '';

const input = () =>{
    return inputVar;
}

const waitForInput = () =>{
    inputVar = '';
    userConsole.innerHTML += ('<div class="console-text">Waiting for input...</div>');
    while(inputVar == ''){
        sleep(100);
    }
    return inputVar;
}

function add_user_text(event){
    if (event.key === "Enter") {
        event.preventDefault();
        console_print(node.innerHTML);
        inputVar = node.innerHTML;
        node.innerHTML = "";
    }
}