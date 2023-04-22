"use strict";

const configTS = require("./configs/typescript.js");
const configReact = require("./configs/react.js");

module.exports = {
  configs: {
    typescript: Object.assign({}, configTS, {
      plugins,
    }),
    react: Object.assign({}, configReact, {
      plugins,
    }),
  },
};
