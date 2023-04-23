/**
 * Custom config base for all projects.
 */

const extendDeps = [
  "eslint:recommended",
  "plugin:import/recommended",
  "plugin:promise/recommended",
  "plugin:sonarjs/recommended",
  "plugin:unicorn/recommended",
];

const pluginDeps = ["import", "promise", "sonarjs", "unicorn"];

module.exports = {
  extends: [...extendDeps],
  plugins: [...pluginDeps],
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
