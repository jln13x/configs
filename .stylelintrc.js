/**
 * @type {import('stylelint').Config}
 * */
const config = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
    // Existing configs in the bottom: https://www.npmjs.com/package/stylelint-order
    'stylelint-order',
  ],
  extends: [
    // Standard css config
    'stylelint-config-standard',

    // Standard scss config
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',

    // Turn off any conflicting rules
    'stylelint-config-prettier-scss',
  ],
  rules: {
    //  Plugin checks `.browserslistrc` for supported browser
    'plugin/no-unsupported-browser-features': true,
    'font-weight-notation': 'numeric',
    'length-zero-no-unit': true,
  },
};

module.exports = config;
