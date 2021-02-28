Blockly.Blocks['token_auth'] = {
    init: function() {
    this.appendValueInput("token")
        .setCheck(null)
        .appendField("token:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("get the token value");
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

Blockly.Blocks['try_catch'] = {
init: function() {
    this.appendDummyInput()
        .appendField("try doing");
    this.appendStatementInput("try")
        .setCheck(null)
        .appendField("this:");
    this.appendDummyInput()
        .appendField("in case of error:");
    this.appendValueInput("var")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("set");
    this.appendDummyInput()
        .appendField("to error and");
    this.appendStatementInput("catch")
        .setCheck(null)
        .appendField("do this:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("it does the first block, in case of an error, gets the error value do the next block");
this.setHelpUrl("https://www.w3schools.com/js/js_errors.asp");
}
};
Blockly.Blocks['throw'] = {
init: function() {
    this.appendValueInput("name")
        .setCheck(null)
        .appendField("error text:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("makes a custom error");
this.setHelpUrl("https://www.w3schools.com/js/js_errors.asp");
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
this.setHelpUrl("");
}
};
Blockly.Blocks['input'] = {
init: function() {
    this.appendDummyInput()
        .appendField("input");
    this.setOutput(true, null);
    this.setColour(160);
this.setTooltip("gets the input");
this.setHelpUrl("");
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
this.setTooltip("start the timer");
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
this.setTooltip("end the timer");
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
this.setTooltip("wait the time in milliseconds");
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
this.setTooltip("the program stops until the condition inside the loop is true");
this.setHelpUrl("");
}
};
//CODE GENS
Blockly.JavaScript['try_catch'] = function(block) {
    const statements_try = Blockly.JavaScript.statementToCode(block, 'try');
    const value_name = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
     
    const code = 'try { \n'+ statements_try +'} catch ('+ value_name +'){\n'+ statements_catch +'} \n';
    return code;
};
Blockly.JavaScript['token_auth'] = function(block) {
    const value_name = Blockly.JavaScript.valueToCode(block, '', Blockly.JavaScript.ORDER_ATOMIC);
    const code = 'var token = ' + value_name + ';';
    return code
}
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
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
//Valour code gens

Blockly.JavaScript['send_message'] = function(block) {
var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
var value_author = Blockly.JavaScript.valueToCode(block, 'author', Blockly.JavaScript.ORDER_ATOMIC);
var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'Valour.send_message\n';
return code;
};

Blockly.JavaScript['message_get'] = function(block) {
var value_get = Blockly.JavaScript.valueToCode(block, 'get', Blockly.JavaScript.ORDER_ATOMIC);
var statements_no = Blockly.JavaScript.statementToCode(block, 'no');
 
const code = '...;\n';
return code;
};

Blockly.JavaScript['role_add'] = function(block) {
var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...;\n';
return code;
};

Blockly.JavaScript['role_remove'] = function(block) {
var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...;\n';
return code;
};

Blockly.JavaScript['kick'] = function(block) {
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...;\n';
return code;
};

Blockly.JavaScript['ban'] = function(block) {
var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...;\n';
return code;
};

Blockly.JavaScript['get_value'] = function(block) {
var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_author'] = function(block) {
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_info'] = function(block) {
var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_planet'] = function(block) {
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_channel'] = function(block) {
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_id'] = function(block) {
var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = '...';
 
return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['console_print'] = function(block) {
var value_to_print = Blockly.JavaScript.valueToCode(block, 'to_print', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'console_print('+ value_to_print +');\n';
return code;
};
Blockly.JavaScript['clear_console'] = function(block) {
 
const code = 'clear_console();\n';
return code;
};
Blockly.JavaScript['throw'] = function(block) {
var value_to_print = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
 
const code = 'throw '+ value_to_print + ';\n';
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
// helper functions
const console_print = (to_print) =>{
    document.getElementById("console").innerHTML += ('<div class="console-text">' + to_print + '</div>');
}
const clear_console = () =>{
    document.getElementById("console").innerHTML = "";
}
const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var inputVar = '';
var inputOld = '';

const input = () =>{
    const inp = inputVar
    inputVar = '';
    return inp
}

const node = document.getElementById("textarea");
node.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console_print(node.innerHTML);
        inputOld = node.innerHTML;
    }
});

// Blockly.Blocks['token_auth']={init:function(){this.appendValueInput("token").setCheck(null).appendField("token:");this.setInputsInline(false);this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(230);this.setTooltip("get the token value");this.setHelpUrl("");}};Blockly.Blocks['send_message']={init:function(){this.appendValueInput("content").setCheck("String").appendField("Message content:");this.appendValueInput("author").setCheck(null).appendField("Token:");this.appendValueInput("path").setCheck("String").appendField("Message path:");this.setInputsInline(false);this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(195);this.setTooltip("Send the message.");this.setHelpUrl("");}};Blockly.Blocks['message_get']={init:function(){this.appendValueInput("get").setCheck(null).appendField("Message received:");this.appendStatementInput("no").setCheck(null).appendField("do");this.setInputsInline(false);this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(195);this.setTooltip("Start of a code block, executes when a message is caught.");this.setHelpUrl("");}};Blockly.Blocks['role_add']={init:function(){this.appendValueInput("name").setCheck("String").appendField("Role to add:");this.appendValueInput("member").setCheck(null).appendField("Member to put role on:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(210);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['role_remove']={init:function(){this.appendValueInput("name").setCheck("String").appendField("Role to remove:");this.appendValueInput("member").setCheck(null).appendField("Member to remove role from:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(210);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['kick']={init:function(){this.appendValueInput("member").setCheck(null).appendField("Member to kick:");this.appendValueInput("reason").setCheck(null).appendField("Reason:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(210);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['ban']={init:function(){this.appendValueInput("member").setCheck(null).appendField("Member to ban:");this.appendValueInput("reason").setCheck(null).appendField("Reason:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(210);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['get_value']={init:function(){this.appendValueInput("value").setCheck(null).appendField("Value to get:");this.appendValueInput("from").setCheck(null).appendField("Get value from:");this.setInputsInline(false);this.setOutput(true,null);this.setColour(210);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['message_author']={init:function(){this.appendDummyInput().appendField("Author");this.setOutput(true,null);this.setColour(120);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['message_info']={init:function(){this.appendValueInput("info").setCheck(null).appendField("Message part:");this.setInputsInline(true);this.setOutput(true,null);this.setColour(160);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['info_planet']={init:function(){this.appendDummyInput().appendField("Planet");this.setOutput(true,null);this.setColour(120);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['info_channel']={init:function(){this.appendDummyInput().appendField("Channel");this.setOutput(true,null);this.setColour(120);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['message_id']={init:function(){this.appendValueInput("id").setCheck(null).appendField("Message ID:");this.setOutput(true,null);this.setColour(160);this.setTooltip("");this.setHelpUrl("");}};Blockly.Blocks['try_catch']={init:function(){this.appendDummyInput().appendField("try doing");this.appendStatementInput("try").setCheck(null).appendField("this:");this.appendDummyInput().appendField("in case of error:");this.appendValueInput("var").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("set");this.appendDummyInput().appendField("to error and");this.appendStatementInput("catch").setCheck(null).appendField("do this:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(230);this.setTooltip("it does the first block, in case of an error, gets the error value do the next block");this.setHelpUrl("https://www.w3schools.com/js/js_errors.asp");}};Blockly.Blocks['throw']={init:function(){this.appendValueInput("name").setCheck(null).appendField("error text:");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(230);this.setTooltip("makes a custom error");this.setHelpUrl("https://www.w3schools.com/js/js_errors.asp");}};Blockly.Blocks['console_print']={init:function(){this.appendValueInput("to_print").setCheck(null).appendField("Print to console");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(160);this.setTooltip("prints to console");this.setHelpUrl("");}};Blockly.Blocks['clear_console']={init:function(){this.appendDummyInput().appendField("Clear Console");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(160);this.setTooltip("clears the console");this.setHelpUrl("");}};Blockly.Blocks['eval']={init:function(){this.appendValueInput("eval").setCheck(null).appendField("evaluate");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(260);this.setTooltip("runs a string as code");this.setHelpUrl("");}};Blockly.Blocks['input']={init:function(){this.appendDummyInput().appendField("input");this.setOutput(true,null);this.setColour(160);this.setTooltip("gets the input");this.setHelpUrl("");}};Blockly.Blocks['cast']={init:function(){this.appendValueInput("NAME").setCheck(null).appendField("make");this.appendDummyInput().appendField("as a").appendField(new Blockly.FieldDropdown([["number","int"],["text","string"]]),"types");this.setInputsInline(true);this.setOutput(true,null);this.setColour(230);this.setTooltip("cast a variable into a type");this.setHelpUrl("https://www.w3schools.com/js/js_type_conversion.asp");}};Blockly.Blocks['timer_start']={init:function(){this.appendValueInput("variable").setCheck(null).appendField("start timer");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(65);this.setTooltip("start the timer");this.setHelpUrl("");}};Blockly.Blocks['timer_end']={init:function(){this.appendValueInput("variable").setCheck(null).appendField("end timer");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(65);this.setTooltip("end the timer");this.setHelpUrl("");}};Blockly.Blocks['timer_wait']={init:function(){this.appendValueInput("variable").setCheck(null).appendField("wait");this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(65);this.setTooltip("wait the time in milliseconds");this.setHelpUrl("");}};Blockly.Blocks['timer_do_until']={init:function(){this.appendValueInput("variable").setCheck("Boolean").appendField("do until");this.appendStatementInput("code").setCheck(null);this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(65);this.setTooltip("the program stops until the condition inside the loop is true");this.setHelpUrl("");}};Blockly.JavaScript['try_catch']=function(block){const statements_try=Blockly.JavaScript.statementToCode(block,'try');const value_name=Blockly.JavaScript.valueToCode(block,'var',Blockly.JavaScript.ORDER_ATOMIC);const statements_catch=Blockly.JavaScript.statementToCode(block,'catch');const code='try { n'+statements_try+'} catch ('+value_name+'){n'+statements_catch+'} n';return code;};Blockly.JavaScript['token_auth']=function(block){const value_name=Blockly.JavaScript.valueToCode(block,'',Blockly.JavaScript.ORDER_ATOMIC);const code='var token = '+value_name+';';return code} Blockly.Blocks['timeout']={init:function(){this.appendValueInput("time").setCheck("Number").appendField("after");this.appendDummyInput().appendField("milliseconds, do");this.appendStatementInput("function").setCheck(null);this.setPreviousStatement(true,null);this.setNextStatement(true,null);this.setColour(230);this.setTooltip("");this.setHelpUrl("");}};Blockly.JavaScript['send_message']=function(block){var value_content=Blockly.JavaScript.valueToCode(block,'content',Blockly.JavaScript.ORDER_ATOMIC);var value_author=Blockly.JavaScript.valueToCode(block,'author',Blockly.JavaScript.ORDER_ATOMIC);var value_path=Blockly.JavaScript.valueToCode(block,'path',Blockly.JavaScript.ORDER_ATOMIC);const code='Valour.send_messagen';return code;};Blockly.JavaScript['message_get']=function(block){var value_get=Blockly.JavaScript.valueToCode(block,'get',Blockly.JavaScript.ORDER_ATOMIC);var statements_no=Blockly.JavaScript.statementToCode(block,'no');const code='...;n';return code;};Blockly.JavaScript['role_add']=function(block){var value_name=Blockly.JavaScript.valueToCode(block,'name',Blockly.JavaScript.ORDER_ATOMIC);var value_member=Blockly.JavaScript.valueToCode(block,'member',Blockly.JavaScript.ORDER_ATOMIC);const code='...;n';return code;};Blockly.JavaScript['role_remove']=function(block){var value_name=Blockly.JavaScript.valueToCode(block,'name',Blockly.JavaScript.ORDER_ATOMIC);var value_member=Blockly.JavaScript.valueToCode(block,'member',Blockly.JavaScript.ORDER_ATOMIC);const code='...;n';return code;};Blockly.JavaScript['kick']=function(block){var value_member=Blockly.JavaScript.valueToCode(block,'member',Blockly.JavaScript.ORDER_ATOMIC);var value_reason=Blockly.JavaScript.valueToCode(block,'reason',Blockly.JavaScript.ORDER_ATOMIC);const code='...;n';return code;};Blockly.JavaScript['ban']=function(block){var value_member=Blockly.JavaScript.valueToCode(block,'member',Blockly.JavaScript.ORDER_ATOMIC);var value_reason=Blockly.JavaScript.valueToCode(block,'reason',Blockly.JavaScript.ORDER_ATOMIC);const code='...;n';return code;};Blockly.JavaScript['get_value']=function(block){var value_value=Blockly.JavaScript.valueToCode(block,'value',Blockly.JavaScript.ORDER_ATOMIC);var value_from=Blockly.JavaScript.valueToCode(block,'from',Blockly.JavaScript.ORDER_ATOMIC);const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['message_author']=function(block){const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['message_info']=function(block){var value_info=Blockly.JavaScript.valueToCode(block,'info',Blockly.JavaScript.ORDER_ATOMIC);const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['info_planet']=function(block){const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['info_channel']=function(block){const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['message_id']=function(block){var value_id=Blockly.JavaScript.valueToCode(block,'id',Blockly.JavaScript.ORDER_ATOMIC);const code='...';return[code,Blockly.JavaScript.ORDER_NONE];};Blockly.JavaScript['console_print']=function(block){var value_to_print=Blockly.JavaScript.valueToCode(block,'to_print',Blockly.JavaScript.ORDER_ATOMIC);const code='console_print('+value_to_print+');n';return code;};Blockly.JavaScript['clear_console']=function(block){const code='clear_console();n';return code;};Blockly.JavaScript['throw']=function(block){var value_to_print=Blockly.JavaScript.valueToCode(block,'name',Blockly.JavaScript.ORDER_ATOMIC);const code='throw '+value_to_print+';n';return code;};Blockly.JavaScript['eval']=function(block){var value_eval=Blockly.JavaScript.valueToCode(block,'eval',Blockly.JavaScript.ORDER_ATOMIC);const code='eval('+value_eval+');n';return code;};Blockly.JavaScript['input']=function(block){var sync=Blockly.JavaScript.valueToCode(block,'sync',Blockly.JavaScript.ORDER_ATOMIC);var code='input()';return[code,Blockly.JavaScript.ORDER_ASSIGNMENT];};Blockly.JavaScript['cast']=function(block){var value_name=Blockly.JavaScript.valueToCode(block,'NAME',Blockly.JavaScript.ORDER_ATOMIC);var drop=block.getFieldValue('types');var code;if(drop=='int'){code='Number('+value_name+')';}else if(drop='string'){code="String("+value_name+')';} return[code,Blockly.JavaScript.ORDER_ASSIGNMENT];};Blockly.JavaScript['timer_start']=function(block){var value_variable=Blockly.JavaScript.valueToCode(block,'variable',Blockly.JavaScript.ORDER_ATOMIC);const code=value_variable+' = Date.now();n';return code;};Blockly.JavaScript['timer_end']=function(block){var varb=Blockly.JavaScript.valueToCode(block,'variable',Blockly.JavaScript.ORDER_ATOMIC);const code=varb+' = Date.now() - '+varb+';n';return code;};Blockly.JavaScript['timer_wait']=function(block){var value=Blockly.JavaScript.valueToCode(block,'variable',Blockly.JavaScript.ORDER_ATOMIC);var code='sleep('+value+');n';return code;};Blockly.JavaScript['timer_do_until']=function(block){var value_variable=Blockly.JavaScript.valueToCode(block,'variable',Blockly.JavaScript.ORDER_ATOMIC);var statements_code=Blockly.JavaScript.statementToCode(block,'code');const code='do {n'+statements_code+'} while ('+value_variable+');n';return code;};Blockly.JavaScript['timeout']=function(block){const value_time=Blockly.JavaScript.valueToCode(block,'time',Blockly.JavaScript.ORDER_ATOMIC);const statements_function=Blockly.JavaScript.statementToCode(block,'function');const code=`setTimeout(()=>{n${statements_function}n},${value_time});n`;return code;};const console_print=(to_print)=>{document.getElementById("console").innerHTML+=('<div class="console-text">'+to_print+'</div>');} const clear_console=()=>{document.getElementById("console").innerHTML="";} const sleep=(milliseconds)=>{const date=Date.now();let currentDate=null;do{currentDate=Date.now();}while(currentDate-date<milliseconds);} var inputVar='';var inputOld='';const input=()=>{const inp=inputVar inputVar='';return inp} const node=document.getElementById("textarea");node.addEventListener("keydown",function(event){if(event.key==="Enter"){event.preventDefault();console_print(node.innerHTML);inputOld=node.innerHTML;}});