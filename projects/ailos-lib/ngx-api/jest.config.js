const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/projects/ailos-lib/ngx-api/tsconfig.spec.json',
    },
  },
};
