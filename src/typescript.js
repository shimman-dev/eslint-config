"use strict";

const plugins = ["@typescript-eslint"];

module.exports = {
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: "*.ts",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:vitest-globals/recommended",
      ],
      plugins: [...plugins],
      rules: {
        "eslint-no-undef": 0,
        "eslint-no-shadow": 0,
      },
    },
    {
      files: "*.test.@(ts)",
      env: {
        "vitest-globals": true,
      },
      plugins: [...plugins, "vitest"],
    },
  ],
};
