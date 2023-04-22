/**
 * Custom config base for all projects.
 */

const plugins = ["import", "promise", "sonarjs", "unicorn"];

module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  plugins: [...plugins],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "unicorn/prevent-abbreviations": 0,
    "import/prefer-default-export": 0,
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
    },
  ],
};
