import Blockly from '../../blockly/';

Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("i"), "name")
        .appendField("=");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['if_else_expr'] = {
  init: function() {
    this.appendValueInput("expr")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if ");
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("statement")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("else");
    this.appendStatementInput("else")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("if the condition is true, do \"then\" statement, else: else part");
 this.setHelpUrl("https://www.google.com/");
  }
};

Blockly.Blocks['value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "value");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("set something to the value");
 this.setHelpUrl("https://www.google.com/");
  }
};

Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("count from")
        .appendField(new Blockly.FieldNumber(0), "start")
        .appendField("until")
        .appendField(new Blockly.FieldNumber(0), "end")
        .appendField("do");
    this.appendStatementInput("for_loop")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Repeats while it's input is true.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['for_each'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for each")
        .appendField(new Blockly.FieldTextInput("element"), "element")
        .appendField("in");
    this.appendValueInput("array")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

 this.setTooltip("Does what's inside it for each type in it's parameters.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['while_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while");
    this.appendValueInput("expr")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("do:");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("https://www.google.com/");
  }
};


Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('length of');
    this.setOutput(true, 'Number');
    this.setColour(160);
    this.setTooltip('Returns number of letters in the provided text.');
    this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
  }
};



Blockly.Blocks['equals_to'] = {
  init: function() {
    this.appendValueInput("lhs")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("rhs")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("If both values are equal, the block outputs TRUE.");
 this.setHelpUrl("");
  }
};