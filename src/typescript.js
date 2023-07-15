"use strict";

const extendDeps = [
  "airbnb-base",
  "airbnb-typescript/base",
  "plugin:@typescript-eslint/recommended",
  "plugin:import/typescript",
];

module.exports = {
  extends: ["./base", ...extendDeps],
};
