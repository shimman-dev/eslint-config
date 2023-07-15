/**
 * Custom config base for all projects.
 */

const extendDeps = [
  "eslint:recommended",
  "eslint-config-prettier",
  "plugin:import/recommended",
  "plugin:promise/recommended",
  "plugin:sonarjs/recommended",
  "plugin:unicorn/recommended",
];

module.exports = {
  extends: [...extendDeps],
  rules: {
    "import/extensions": "off",
    "unicorn/filename-case": "off",
    "import/prefer-default-export": "off",
  },
  overrides: [
    {
      /**
       * Relax rules in config files
       */
      files: [
        "**/{commitlint,jest}.config.{j,t}s?(x)",
        "**/vite.*.{j,t}s",
        "**/typedoc.js",
        "**/.eslintrc.cjs",
        "**/.stylelintrc.js",
      ],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
