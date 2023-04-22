"use strict";

const plugins = [
  "@typescript-eslint",
  "eslint-config-prettier",
  "import",
  "promise",
  "sonarjs",
  "unicorn",
];

module.exports = Object.assign(
  {},
  {
    env: {
      browser: false,
      es2022: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: [
      "eslint:recommended",
      "airbnb-base",
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "plugin:sonarjs/recommended",
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "plugin:vitest-globals/recommended",
    ],
    plugins: [...plugins],
    rules: {
      "eslint-no-undef": 0,
      "eslint-no-shadow": 0,
    },
    overrides: [
      {
        files: "*.test.@(ts)",
        env: {
          "vitest-globals": true,
        },
        plugins: [...plugins, "vitest"],
      },
    ],
  }
);
