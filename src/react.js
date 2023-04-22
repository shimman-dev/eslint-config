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
        "react/no-unescaped-entities": 0,
        "react/react-in-jsx-scope": 0,
        "eslint-no-undef": 0,
        "eslint-no-shadow": 0,
      },
    },
    {
      files: "*.test.@(ts|tsx)",
      extends: [...extendDeps, "plugin:vitest/recommended", "plugin:testing-library/react"],
      plugins: [...extendDeps, "vitest"],
      rules: { "react/jsx-props-no-spreading": 0 },
    },
  ],
};
