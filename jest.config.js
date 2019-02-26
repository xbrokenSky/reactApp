module.exports = {
    setupFiles: [
        '<rootDir>/__tests__/global.js',
        '<rootDir>setupTests.js',
    ],
    modulePathIgnorePatterns: [
        'global.js',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    verbose: true,
    notify: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/scripts/**'],
    coverageThreshold: {
        global: {
            branches: 20,
            functions: 20,
            lines: 20,
            statements: 20
        }
    }
};
