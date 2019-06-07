Blockly.Blocks['boucle_fr'] = {
  init: function() {
    this.appendValueInput("tant_que")
        .setCheck(null)
        .appendField("Tant que");
    this.appendStatementInput("quoi")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("boucle");
 this.setHelpUrl("");
  }
};

Blockly.Python['boucle_fr'] = function(block) {
  var value_tant_que = Blockly.Python.valueToCode(block, 'tant_que', Blockly.Python.ORDER_ATOMIC);
  var statements_quoi = Blockly.Python.statementToCode(block, 'quoi');
  // TODO: Assemble Python into code variable.
  var code = 'while '+ value_tant_que + ' :\n'+ statements_quoi;
  return code;
};




Blockly.Blocks['first'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le premier de la file s'avance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("assignation de first");
 this.setHelpUrl("");
  }
};


Blockly.Python['first'] = function(block) {
  var code = 'j=0\nfirst = attente.pop()\n';
  return code;
};


Blockly.Blocks['file_non_vide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il y a des enfants dans la file");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("attente");
 this.setHelpUrl("");
  }
};



Blockly.Python['file_non_vide'] = function(block) {
  var code = 'attente';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['rangee_non_vide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il y a un enfant en face");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("rangee non vide");
 this.setHelpUrl("");
  }
};

Blockly.Python['rangee_non_vide'] = function(block) {
  var code = 'rangee[j] != \'vide\'';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['cond_fr'] = {
  init: function() {
    this.appendValueInput("cond")
        .setCheck(null)
        .appendField("Si");
    this.appendStatementInput("si")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Sinon");
    this.appendStatementInput("sinon")
        .setCheck(null);
    this.setPreviousStatement(true, null);

    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['cond_fr'] = function(block) {
  var value_cond = Blockly.Python.valueToCode(block, 'cond', Blockly.Python.ORDER_ATOMIC);
  var statements_si = Blockly.Python.statementToCode(block, 'si');
  var statements_sinon = Blockly.Python.statementToCode(block, 'sinon');
  var code = 'if '+ value_cond + ' :\n' + statements_si + 'else :\n'+ statements_sinon;
  return code;
};




Blockly.Blocks['lettre_plus_petite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("La 1ère lettre du nom du premier de ");
    this.appendDummyInput()
        .appendField("la file est plus petite que celle de ");
    this.appendDummyInput()
        .appendField("la personne en face");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("first < rangée");
 this.setHelpUrl("");
  }
};


Blockly.Python['lettre_plus_petite'] = function(block) {
  var code = 'first < rangee[j]';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['d_calage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le reste de la rangée se décale");
    this.setPreviousStatement(true, null);
    this.setColour(30);
 this.setTooltip("décalage du reste de la rangée");
 this.setHelpUrl("");
  }
};

Blockly.Python['d_calage'] = function(block) {
  var code = 'decalage(rangee, j)\n';
  return code;
};




Blockly.Blocks['premier_d_cale'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le premier fait un pas sur le côté");
    this.setPreviousStatement(true, null);
    this.setColour(30);
 this.setTooltip("incrémentation de j");
 this.setHelpUrl("");
  }
};



Blockly.Python['premier_d_cale'] = function(block) {
  var code = 'j=j+1\n';
  return code;
};

Blockly.Blocks['placement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Le premier prend place dans la rangée");
    this.setPreviousStatement(true, null);
    this.setColour(30);
 this.setTooltip("rangée[j] = k");
 this.setHelpUrl("");
  }
};

Blockly.Python['placement'] = function(block) {
  var code = 'rangee[j]=first\n';
  return code;
};
