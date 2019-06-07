Blockly.Blocks['pic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Prendre un pic à brochette");
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("initialisation du pic");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["fraise","fraise"], ["banane","banane"], ["ananas","ananas"], ["kiwi","kiwi"], ["clementine","clementine"], ["abricot","abricot"], ["pêche","peche"], ["pastèque","pasteque"], ["melon","melon"]]), "fruits");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("morceux de fruits");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ajout'] = {
  init: function() {
    this.appendValueInput("fruit")
        .setCheck(null)
        .appendField("Ajouter un morceau de ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("ajouter un élément");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['jusqua'] = {
  init: function() {
    this.appendValueInput("valuejusqua")
        .setCheck(null)
        .appendField("Répéter tant que ");
    this.appendStatementInput("quoifaire")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("boucle");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['fin_pic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il n'y a pas 7 éléments sur le pic");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("condition de fin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['times_fr'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("Répéter");
    this.appendDummyInput()
        .appendField("fois");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("boucle en français");
 this.setHelpUrl("");
  }
};

Blockly.Python['pic'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'pic = []\n';
  return code;
};

Blockly.Python['element'] = function(block) {
  var dropdown_fruits = block.getFieldValue('fruits');
  // TODO: Assemble Python into code variable.
  var code = '\''+dropdown_fruits+'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ajout'] = function(block) {
  var value_fruit = Blockly.Python.valueToCode(block, 'fruit', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'pic.append'+value_fruit+'\n';
  return code;
};

Blockly.Python['jusqua'] = function(block) {
  var value_valuejusqua = Blockly.Python.valueToCode(block, 'valuejusqua', Blockly.Python.ORDER_ATOMIC);
  var statements_quoifaire = Blockly.Python.statementToCode(block, 'quoifaire');
  // TODO: Assemble Python into code variable.
  var code = 'while '+value_valuejusqua+':\n'+statements_quoifaire;
  return code;
};

Blockly.Python['fin_pic'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'len(pic)<7';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['times_fr'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  // TODO: Assemble Python into code variable.
  var code = 'for count in range ('+value_x+'):\n'+statements_do;
  return code;
};


