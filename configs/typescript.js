"use strict";

const plugins = [
  "import",
  "@typescript-eslint",
  "sonarjs",
  "eslint-config-prettier",
];

module.exports = Object.assign(
  {},
  {
    extends: [
      "eslint:recommended",
      "airbnb-base",
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "plugin:sonarjs/recommended",
    ],
    plugins: [],
    rules: {
      "eslint-no-undef": 0,
      "eslint-no-shadow": 0,
    },
    overrides: [
      {
        files: "*.test.@(ts)",
        plugins: [...plugins, "vitest"],
      },
    ],
  }
);
