/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
    "import",
    "unused-imports",
  ],
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress"],
  rules: {
    "import/order": "warn",
    "import/first": "warn",
    "import/no-empty-named-blocks": "warn",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-restricted-imports": ["error"],
  },
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it means we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 28,
    },
  },
};
