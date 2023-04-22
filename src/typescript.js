"use strict";

const plugins = ["@typescript-eslint"];

module.exports = {
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: "*.ts",
      env: {
        node: true,
        browser: false,
        es2022: true,
      },
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
        "eslint-config-prettier",
      ],
      plugins: [...plugins],
      rules: {
        "eslint-no-undef": 0,
        "eslint-no-shadow": 0,
      },
    },
    {
      files: "*.test.@(ts)",
      extends: ["plugin:vitest/recommended"],

      plugins: [...plugins, "vitest"],
    },
  ],
};
