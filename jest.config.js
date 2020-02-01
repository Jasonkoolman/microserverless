/**
 * Jest configuration file.
 * 
 * @docs https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/']
};
