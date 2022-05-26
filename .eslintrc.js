/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  //   Only needed if we want to define all rules manually
  plugins: [],

  // Presets
  extends: [
    // built in - lint for well-known best-practices
    'eslint:recommended',

    // recommend config from typescript-eslint
    'plugin:@typescript-eslint/recommended',

    // ensure ESLint doesn't report on formatting issues that prettier will fix
    'prettier',

    // import/export syntax linting and prevent issues with misspelling of file paths and import names
    'plugin:import/recommended',
    // also requires eslint-import-resolver-typescript
    'plugin:import/typescript',

    'plugin:react/recommended',
    // disable relevant rules from react since we are using JSX transform
    'plugin:react/jsx-runtime',

    'plugin:react-hooks/recommended',

    // accessibility rules on JSX elements.
    'plugin:jsx-a11y/recommended',

    // e2e
    'plugin:cypress/recommended',

    // testing library - includes DOM
    'plugin:testing-library/react',

    // Includes eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y
    // "airbnb",
    // "airbnb/hooks"
    // eslint-config-airbnb-base
  ],
  rules: {
    'import/no-default-export': 'error',
  },
};
