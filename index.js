module.exports = {
  plugins: ["import", "vitest", "sonarjs"],
  overrides: [
    {
      files: "*.(js)",
      extends: ["./javascript.js"],
    },
    {
      files: "*.(ts)",
      extends: ["./typescript.js"],
    },
    {
      files: "*.test.@(js|jsx|ts|tsx)",
      extends: ["./vitest.js"],
    },
  ],
  rules: {
    "eslint-no-undef": "off",
  },
};
