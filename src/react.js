"use strict";

const extendDeps = [
  "airbnb",
  "airbnb-typescript",
  "plugin:@typescript-eslint/recommended",
  "plugin:import/typescript",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "eslint-config-prettier",
];

const pluginDeps = [
  "@typescript-eslint",
  "html",
  "jsx-a11y",
  "react",
  "react-hooks",
];

module.exports = {
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: "*.(ts|tsx)",
      extends: [...extendDeps],
      plugins: [...pluginDeps],
      rules: {
        "react/no-unescaped-entities": "off",
        "react/react-in-jsx-scope": "off",
        "eslint-no-undef": "off",
        "eslint-no-shadow": "off",
        "import/prefer-default-export": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/filename-case": "off",
      },
    },
    {
      files: "*.test.@(ts|tsx)",
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
