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
  Blockly.Blocks['send_message'] = {
  init: function() {
    this.appendValueInput("content")
      .setCheck("String")
      .appendField("Message content:");
    this.appendValueInput("author")
      .setCheck("null")
      .appendField("Token:");
    this.appendValueInput("path")
      .setCheck("String")
      .appendField("Message path:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
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
   this.setColour(230);
   this.setTooltip("Start of a code block, executes when a message is caught.");
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
    this.appendValueInput("NAME")
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
    this.appendValueInput("print to console")
        .setCheck("String")
        .appendField("print");
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
        .appendField("clear console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("clears the console");
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
  Blockly.JavaScript['console_print'] = function(block) {
    var value_print = Blockly.JavaScript.valueToCode(block, 'print', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'console_print('+ value_print +');\n';
    return code;
  };
  Blockly.JavaScript['clear_console'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clear_console();\n';
    return code;
  };
var console = document.getElementById("console");
function console_print(to_print){
  console.innerHTML += (to_print + '\n');
}
function clear_console(){
  console.innerHTML = "";
}