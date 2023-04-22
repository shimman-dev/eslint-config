module.exports = {
  extends: ["./src/typescript", "./src/react", "./src/base"].map(
    require.resolve
  ),
  rules: {},
};
