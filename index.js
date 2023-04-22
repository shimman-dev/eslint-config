const { base, typescript, react } = require("./src");

// Export typescript as default configuration
module.exports = {
  extends: [base, typescript, react].map((path) => require.resolve(path)),
};
