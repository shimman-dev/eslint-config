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
      extends: [...extendDeps],
      plugins: [...pluginDeps],
      rules: {
        "eslint-no-undef": "off",
        "eslint-no-shadow": "off",
        "import/prefer-default-export": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/filename-case": "off",
      },
    },
  ],
};
