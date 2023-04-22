"use strict";

const extendDeps = [
  "airbnb-base",
  "airbnb-typescript/base",
  "plugin:@typescript-eslint/recommended",
  "plugin:import/typescript",
  "eslint-config-prettier",
];

const pluginDeps = ["@typescript-eslint"];

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
      extends: [...extendDeps],
      plugins: [...pluginDeps],
      rules: {
        "eslint-no-undef": "off",
        "eslint-no-shadow": "off",
        "import/prefer-default-export": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
      },
    },
    {
      files: "*.test.@(ts)",
      extends: [...extendDeps, "plugin:vitest/recommended"],

      plugins: [...pluginDeps, "vitest"],
    },
  ],
};
