"use strict";

module.exports = {
  extends: require.resolve("./base.js"),
  overrides: [
    {
      files: "*.test.@(ts|tsx)",
      extends: ["plugin:vitest/recommended", "plugin:testing-library/react"],
      plugins: ["vitest", "testing-library"],
    },
  ],
};
