/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: 'Brads add text',
  helpUrl: '',
};

const rangefinder = {
  type: "rangefinder",
  tooltip: "",
  helpUrl: "",
  message0: "Range in cm %1",
  args0: [
    {
      type: "input_dummy",
      name: "RangeFinder"
    }
  ],
  output: "Number",
  colour: 225
};

const command = {
  type: "command_brad",
  tooltip: "Command the robot should be able to do",
  helpUrl: "",
  message0: "Command %1 finished when %2 %3 Do this first %4 then repeat this %5 When finished %6",
  args0: [
    {
      type: "field_input",
      name: "NAME",
      text: "default"
    },
    {
      type: "input_dummy",
      name: "Command"
    },
    {
      type: "input_value",
      name: "IsFinished",
      check: "Boolean",
    },
    {
      type: "input_statement",
      name: "initialize"
    },
    {
      type: "input_statement",
      name: "execute"
    },
    {
      type: "input_statement",
      name: "whenFinished"
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 225
};


// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
  command,
]);
