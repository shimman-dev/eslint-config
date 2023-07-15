module.exports = {
  extends: [
    "./src/typescript.js",
    "./src/react.js",
    "./src/base.js",
    "./src/test.js",
  ].map(require.resolve),
  rules: {},
};
