/*module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};*/

module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupJest.ts'
  ],
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/node_modules/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/environments/**',
    '!**/src/setupJest.ts'
  ]
};
