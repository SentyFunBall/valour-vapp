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
//CODE GENS
  Blockly.JavaScript['try_catch'] = function(block) {
    var statements_try = Blockly.JavaScript.statementToCode(block, 'try');
    var value_name = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_catch = Blockly.JavaScript.statementToCode(block, 'catch');
    // TODO: Assemble JavaScript into code variable.
    var code = 'try { \n'+ statements_try +'} catch ('+ value_name +'){\n'+ statements_catch +'} \n';
    return code;
  };
  Blockly.JavaScript['token_auth'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, '', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'var token = ' + value_name + ';';
    return code
  }

//Valour code gens

Blockly.JavaScript['send_message'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  var value_author = Blockly.JavaScript.valueToCode(block, 'author', Blockly.JavaScript.ORDER_ATOMIC);
  var value_path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['message_get'] = function(block) {
  var value_get = Blockly.JavaScript.valueToCode(block, 'get', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_no = Blockly.JavaScript.statementToCode(block, 'no');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['role_add'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['role_remove'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['kick'] = function(block) {
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['ban'] = function(block) {
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  var value_reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['get_value'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var value_from = Blockly.JavaScript.valueToCode(block, 'from', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_author'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_info'] = function(block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_planet'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['info_channel'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['message_id'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

  Blockly.JavaScript['console_print'] = function(block) {
    var value_to_print = Blockly.JavaScript.valueToCode(block, 'to_print', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'console_print('+ value_to_print +');\n';
    return code;
  };
  Blockly.JavaScript['clear_console'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clear_console();\n';
    return code;
  };
  Blockly.JavaScript['console_print'] = function(block) {
    var value_to_print = Blockly.JavaScript.valueToCode(block, 'to_print', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'console_print('+ value_to_print +');\n';
    return code;
  };
  Blockly.JavaScript['throw'] = function(block) {
    var value_to_print = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'throw '+ value_to_print + ';\n';
    return code;
  };
  Blockly.JavaScript['eval'] = function(block) {
    var value_eval = Blockly.JavaScript.valueToCode(block, 'eval', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'eval('+value_eval+');\n';
    return code;
  };
function console_print(to_print){
  var console = document.getElementById("console");
  console.innerHTML += (to_print + '\n');
}
function clear_console(){
  var console = document.getElementById("console");
  console.innerHTML = "";
}