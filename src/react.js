"use strict";

const extendDeps = [
  "airbnb",
  "airbnb/hooks",
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
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: "*.(ts|tsx)",
      env: {
        node: false,
        browser: true,
        es2022: true,
      },
      globals: {
        React: true,
        JSX: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [...extendDeps],
      plugins: [...pluginDeps],
      rules: {
        "react/no-unescaped-entities": "off",
        "react/react-in-jsx-scope": "off",
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
      files: "*.test.@(ts|tsx)",
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
