"use strict";

const configTS = require("./configs/typescript.js");
const configReact = require("./configs/react.js");

module.exports = {
  configs: {
    typescript: Object.assign({}, configTS, {
      parserOptions: configAll.languageOptions.parserOptions,
      plugins,
    }),
    react: Object.assign({}, configReact, {
      parserOptions: configRuntime.languageOptions.parserOptions,
      plugins,
    }),
  },
};
