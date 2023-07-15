"use strict";

const extendDeps = [
  "plugin:vitest/recommended",
  "plugin:testing-library/react",
];

module.exports = {
  extends: ["./base", ...extendDeps],
  rules: {
    "vitest/consistent-test-it": ["error", { fn: "test" }],
    "vitest/prefer-each": "error",
    "vitest/prefer-expect-resolves": "error",
    "vitest/consistent-test-it": ["error", { fn: "test" }],
  },
};
