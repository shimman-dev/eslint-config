"use strict";

const plugins = [
  "import",
  "@typescript-eslint",
  "sonarjs",
  "html",
  "jsx-a11y",
  "react",
  "react-hooks",
  "eslint-config-prettier",
];

module.exports = Object.assign(
  {},
  {
    globals: {
      React: true,
      JSX: true,
    },
    extends: [
      "eslint:recommended",
      "airbnb",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:sonarjs/recommended",
      "plugin:testing-library/react",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
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
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    overrides: [
      {
        files: "*.test.@(ts|tsx)",
        plugins: [...plugins, "vitest"],
      },
    ],
  }
);

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, "languageOptions", { enumerable: false });
