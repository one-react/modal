module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/*\\.scss',
    '!src/index.js'
  ],
  mapCoverage: true,
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/index.js',
    '<rootDir>/src/*\\.scss'
  ],
  testRegex: '/tests/.+\\.test\\.js$'
}
