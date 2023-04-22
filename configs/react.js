"use strict";

const plugins = [
  "@typescript-eslint",
  "eslint-config-prettier",
  "html",
  "import",
  "jsx-a11y",
  "promise",
  "react",
  "react-hooks",
  "sonarjs",
  "unicorn",
];

module.exports = Object.assign(
  {},
  {
    env: {
      browser: true,
      es2022: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: true,
      JSX: true,
    },
    extends: [
      "eslint:recommended",
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:sonarjs/recommended",
      "plugin:testing-library/react",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "plugin:vitest-globals/recommended",
    ],
    plugins: [...plugins],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/no-unescaped-entities": 0,
      "react/react-in-jsx-scope": 0,
      "eslint-no-undef": 0,
      "eslint-no-shadow": 0,
    },
    overrides: [
      {
        files: "*.test.@(ts|tsx)",
        env: {
          "vitest-globals": true,
        },
        plugins: [...plugins, "vitest"],
      },
    ],
  }
);

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, "languageOptions", { enumerable: false });
