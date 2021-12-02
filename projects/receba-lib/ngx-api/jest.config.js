const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/projects/receba-lib/ngx-api/tsconfig.spec.json',
    },
  },
};
