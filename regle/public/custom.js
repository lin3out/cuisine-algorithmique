Blockly.Blocks['var_ing'] = {
  init: function() {
    this.appendValueInput("ing")
        .setCheck("Number")
        .appendField("Fixer la quantité de")
        .appendField(new Blockly.FieldDropdown([["farine","farine"], ["oeuf","oeuf"], ["beurre","beurre"], ["sucre","sucre"], ["levure","levure"]]), "ingredients")
        .appendField("à");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("initialisation des variables ingrédients");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['var_parts'] = {
  init: function() {
    this.appendValueInput("parts")
        .setCheck("Number")
        .appendField("Fixer le nombre de parts")
        .appendField(new Blockly.FieldDropdown([["prévues dans la recette","parts_prevues"], ["voulues","parts_voulues"]]), "parts")
        .appendField("à");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("initialisation des parts");
 this.setHelpUrl("");
  }
};

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

Blockly.Blocks['ingredients'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("il reste des ingrédients à calculer");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("la liste d'ingrédients n'est pas vide");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['choix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Choisir un ingrédient");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("choisir un élément");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['var_quant'] = {
  init: function() {
    this.appendValueInput("quant")
        .setCheck("Number")
        .appendField("Fixer la quantité calculée à");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("quantité calculée");
 this.setHelpUrl("");
  }
};



Blockly.Python['var_ing'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('ingredients');
  var value_ing = Blockly.Python.valueToCode(block, 'ing', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ingredients.append((\''+dropdown_ingredients+'\', ' +value_ing+ '))\ncopy.append((\''+dropdown_ingredients+'\', ' +value_ing+ '))\n';
  return code;
};

Blockly.Python['var_parts'] = function(block) {
  var dropdown_parts = block.getFieldValue('parts');
  var value_parts = Blockly.Python.valueToCode(block, 'parts', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_parts+' = '+value_parts +'\n';
  return code;
};

Blockly.Python['boucle_fr'] = function(block) {
  var value_tant_que = Blockly.Python.valueToCode(block, 'tant_que', Blockly.Python.ORDER_ATOMIC);
  var statements_quoi = Blockly.Python.statementToCode(block, 'quoi');
  // TODO: Assemble Python into code variable.
  var code = 'while '+value_tant_que+' :\n'+statements_quoi;
  return code;
};

Blockly.Python['ingredients'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ingredients';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['choix'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'elem = ingredients.pop()\nquantite_ingredient = elem[1]\n';
  return code;
};

Blockly.Python['var_quant'] = function(block) {
  var value_quant = Blockly.Python.valueToCode(block, 'quant', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'quantite_calculee = '+value_quant+'\n';
  return code;
};
