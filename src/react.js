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
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["*.test.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
