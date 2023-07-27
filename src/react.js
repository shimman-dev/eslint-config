"use strict";

const extendDeps = [
  "airbnb",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "eslint-config-prettier",
];

const pluginDeps = ["html"];

module.exports = {
  extends: ["./base", "./typescript", ...extendDeps],
  plugins: [...pluginDeps],
  settings: {
    react: {
      version: "18.0",
    },
  },
  rules: {
    "arrow-body-style": "off",
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "unicorn/prefer-query-selector": "off",
      },
    },
  ],
};
