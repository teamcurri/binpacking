/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  cacheDirectory: 'node_modules/.cache/jest',
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  preset: 'ts-jest',
  testEnvironment: 'node',
}
