module.exports = {
  extends: [
    "./src/typescript.js",
    "./src/react.js",
    "./src/base.js",
    "./src/vitest.js",
  ].map(require.resolve),
  rules: {},
};
