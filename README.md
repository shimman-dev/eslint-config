# eslint config
[![npm version](https://badge.fury.io/js/@shimman-dev%2Feslint-config.svg)](https://badge.fury.io/js/@shimman-dev%2Feslint-config)

[(Inherit, whatever you want)](https://www.youtube.com/watch?v=3h8Nchqs95w#t=5s)

Config used for `shimman-dev` projects.

Designed to work with React, Vitest, TypeScript, and ECMAScript.

## Install

Installation does require `eslint` and `@typescript-eslint/parser`:

```shell
npm install -D @shimman-dev/eslint-config@latest \
	       eslint \
               @typescript-eslint/parser
```

```shell
yarn add --dev @shimman-dev/eslint-config@latest \
	       eslint \
               @typescript-eslint/parser
```

```shell
pnpm add --save-dev @shimman-dev/eslint-config@latest \
	            eslint \
                    @typescript-eslint/parser
```

## Usage

Several configs include `base`, `react`, `typescript`, and `test`.

Example of usage for a `react` project using an `.eslintrc.cjs` config:

```javascript
module.exports = {
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "18",
    },
  },
  parserOptions: {}, // define your `tsconfigRootDir` and `projects` as needed
  extends: [
    "@shimman-dev/eslint-config/react",
    "@shimman-dev/eslint-config/test",
  ],
  parser: "@typescript-eslint/parser",
  root: true,
};
```

## List of Plugins used

<details><summary>Expand to see a list of plugins</summary>

```
@typescript-eslint/eslint-plugin
eslint-config-airbnb
eslint-config-airbnb-base
eslint-config-airbnb-typescript
eslint-config-prettier
eslint-plugin-html
eslint-plugin-import
eslint-plugin-jsdoc
eslint-plugin-jsx-a11y
eslint-plugin-promise
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-sonarjs
eslint-plugin-testing-library
eslint-plugin-unicorn
eslint-plugin-vitest
```

</details>

## Todos

- [x] create portable config
- [ ] explain reasoning for each plugin
