module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*'
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/lib/'],
    coverageProvider: 'v8',
    verbose: true,
};