"use strict";

const extendDeps = [
  "plugin:vitest/recommended",
  "plugin:testing-library/react",
];

module.exports = {
  extends: ["./base", ...extendDeps],
  overrides: [
    {
      files: ["*.test.tsx", "*.test.ts"],
      rules: {
        "vitest/consistent-test-it": ["error", { fn: "test" }],
        "vitest/prefer-each": "error",
        "vitest/prefer-expect-resolves": "error",
        "vitest/consistent-test-it": ["error", { fn: "test" }],
      },
    },
  ],
};
