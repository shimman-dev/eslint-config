# eslint config

Config used in shimman-dev projects.

## Install

Be sure to install the correct versions of each peer dependency, which is given
by the following command:

```shell
npm info "@shimman-dev/eslint-config@latest" peerDependencies
```

If you are using `npm` with a version greater than 5 (`node version 8+`) you can
run the following command:

```shell
npx install-peerdeps --dev @shimman-dev/eslint-config
```

Alternatively you can use these commands for the following presets:

- For `@shimman-dev/eslint-config/typescript`

```shell
npm install @typescript-eslint/eslint-plugin \
	    eslint-config-airbnb-base \
	    eslint-config-airbnb-typescript \
	    eslint-config-prettier \
	    eslint-plugin-import \
	    eslint-plugin-jsdoc \
	    eslint-plugin-promise \
	    eslint-plugin-sonarjs \
	    eslint-plugin-unicorn \
	    eslint-plugin-vitest \
	    --save-dev
```

<details>
  <summary>Expand for other options (yarn, pnpm)</summary>
  
```shell
yarn add @typescript-eslint/eslint-plugin \
	 eslint-config-airbnb-base \
	 eslint-config-airbnb-typescript \
	 eslint-config-prettier \
	 eslint-plugin-import \
	 eslint-plugin-jsdoc \
	 eslint-plugin-promise \
	 eslint-plugin-sonarjs \
	 eslint-plugin-unicorn \
	 eslint-plugin-vitest \
	 --dev
```

```shell
pnpm add @typescript-eslint/eslint-plugin \
	 eslint-config-airbnb-base \
	 eslint-config-airbnb-typescript \
	 eslint-config-prettier \
	 eslint-plugin-import \
	 eslint-plugin-jsdoc \
	 eslint-plugin-promise \
	 eslint-plugin-sonarjs \
	 eslint-plugin-unicorn \
	 eslint-plugin-vitest \
	 --save-dev
```

</details>

- For `@shimman-dev/eslint-config/react`

```shell
npm install @typescript-eslint/eslint-plugin \
	    eslint-config-airbnb \
	    eslint-config-airbnb-typescript \
	    eslint-config-prettier \
	    eslint-plugin-html \
	    eslint-plugin-import \
	    eslint-plugin-jsdoc \
	    eslint-plugin-jsx-a11y \
	    eslint-plugin-promise \
	    eslint-plugin-react \
	    eslint-plugin-react-hooks \
	    eslint-plugin-sonarjs \
	    eslint-plugin-testing-library \
	    eslint-plugin-unicorn \
	    eslint-plugin-vitest \
	    --save-dev
```

<details>
  <summary>Expand for other options (yarn, pnpm)</summary>

```shell
yarn add @typescript-eslint/eslint-plugin \
	eslint-config-airbnb \
	eslint-config-airbnb-typescript \
	eslint-config-prettier \
	eslint-plugin-html \
	eslint-plugin-import \
	eslint-plugin-jsdoc \
	eslint-plugin-jsx-a11y \
	eslint-plugin-promise \
	eslint-plugin-react \
	eslint-plugin-react-hooks \
	eslint-plugin-sonarjs \
	eslint-plugin-testing-library \
	eslint-plugin-unicorn \
	eslint-plugin-vitest \
	--dev
```

```shell
pnpm add @typescript-eslint/eslint-plugin \
	 eslint-config-airbnb \
	 eslint-config-airbnb-typescript \
	 eslint-config-prettier \
	 eslint-plugin-html \
	 eslint-plugin-import \
	 eslint-plugin-jsdoc \
	 eslint-plugin-jsx-a11y \
	 eslint-plugin-promise \
	 eslint-plugin-react \
	 eslint-plugin-react-hooks \
	 eslint-plugin-sonarjs \
	 eslint-plugin-testing-library \
	 eslint-plugin-unicorn \
	 eslint-plugin-vitest \
	 --save-dev
```

</details>

```js
{
  'extends': [
    // to use strictly react preset
    '@shimman-dev/eslint-config/react'
    // or to use typescript preset (for nonbrowser work)
    '@shimman-dev/eslint-config/typescript'
  ]
}
```
