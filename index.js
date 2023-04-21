module.exports = {
  plugins: ["import", "vitest", "sonarjs"],
  overrides: [
    {
      files: "*.(js|jsx)",
      extends: ["./javascript.js"],
    },
    {
      files: "*.(ts|tsx)",
      extends: ["./typescript.js"],
    },
    {
      files: "*.test.@(js|jsx|ts|tsx)",
      extends: ["./vitest.js"],
    },
  ],
};
