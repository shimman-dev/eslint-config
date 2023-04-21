module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:testing-library/react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "sonarjs",
    "html",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  rules: {
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": 0,
  },
};
