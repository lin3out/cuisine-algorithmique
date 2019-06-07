Blockly.Blocks['valide'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.appendDummyInput()
        .appendField("Le gâteau est valide");
    this.setColour(30);
    this.setTooltip('si le gâteau est valide');
    this.setHelpUrl('');
  }
};


Blockly.Python['valide'] = function(block) {
  var code = 'result = True\n';
  return code;
};


Blockly.Blocks['condition'] = {
  init: function() {
    this.appendValueInput("si")
        .setCheck("Boolean")
        .appendField("Si");
    this.appendStatementInput("cond_if")
        .setCheck(null)
        .appendField("Alors");
    this.appendValueInput("sinonsi")
        .setCheck("Boolean")
        .appendField("Sinon si");
    this.appendStatementInput("cond_elif")
        .setCheck(null)
        .appendField("Alors");
    this.setPreviousStatement(true, null);
    this.setColour(210);
 this.setTooltip("condition arrangée");
 this.setHelpUrl("");
  }
};

Blockly.Python['condition'] = function(block) {
  var value_si = Blockly.Python.valueToCode(block, 'si', Blockly.Python.ORDER_ATOMIC);
  var statements_cond_if = Blockly.Python.statementToCode(block, 'cond_if');
  var value_sinonsi = Blockly.Python.valueToCode(block, 'sinonsi', Blockly.Python.ORDER_ATOMIC);
  var statements_cond_elif = Blockly.Python.statementToCode(block, 'cond_elif');
  var code = 'if '+value_si+" :\n"+statements_cond_if+"elif "+ value_sinonsi +":\n"+statements_cond_elif;

  return code;
};

Blockly.Blocks['egalite_gateau'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le gâteau est")
        .appendField(new Blockly.FieldDropdown([["nature ","nature"], ["au chocolat","chocolat"]]), "gateau");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("bloc de condition pour le gâteau");
 this.setHelpUrl("");
  }
};

Blockly.Python['egalite_gateau'] = function(block) {
  var dropdown_gateau = block.getFieldValue('gateau');
  var code = 'cake == \'' + dropdown_gateau+ '\'' ;
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Blocks['egalite_glacage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le glaçage est ")
        .appendField(new Blockly.FieldDropdown([["rose","rose"], ["bleu","bleu"], ["sans rien","rien"]]), "glacage");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("bloc de condition pour le glaçage");
 this.setHelpUrl("");
  }
};

Blockly.Python['egalite_glacage'] = function(block) {
  var dropdown_glacage = block.getFieldValue('glacage');
  var code = 'glacage == \'' + dropdown_glacage+'\'' ;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['egalite_deco'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("La décoration est constituée")
        .appendField(new Blockly.FieldDropdown([["de fraises","fraises"], ["d'un bonhomme","bonhomme"], ["de rien","rien"],["de bougies","bougies"]]), "deco");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("bloc de condition pour la déco");
 this.setHelpUrl("");
  }
};

Blockly.Python['egalite_deco'] = function(block) {
  var dropdown_deco = block.getFieldValue('deco');
  var code = 'deco == \'' + dropdown_deco +'\'';
  return [code, Blockly.Python.ORDER_NONE];
};


