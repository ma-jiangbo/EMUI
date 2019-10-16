const config = require('./jest.config')

module.exports = Object.assign({}, config, {
    reporters: ['default', 'jest-junit'],
    collectCoverage: true,
    collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
})