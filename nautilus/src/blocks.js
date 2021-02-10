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

//CODE GENS

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