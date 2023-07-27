module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'DEPRECATED', '.story.', '/__mocks__/', '.schema.ts'],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  coverageReporters: ['lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(png|gif|jpg)$': '<rootDir>/test/relativefileMock.js',
  },
  preset: 'react-native',
  setupFiles: ['./test/jestSetupFile.js', './node_modules/react-native-gesture-handler/jestSetup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', 'DEPRECATED', '.story.', '/__mocks__/', '.schema.ts'],
  transformIgnorePatterns: ['node_modules/?!'],
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
}
