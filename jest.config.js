// module.exports = {
//   testPathIgnorePatterns: ['<rootDir>/.next/', 'node_modules/'],
//   setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
//   moduleNameMapper: {
//     '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
//   },
//   transform: {
//     '/^.+.(js|ts|tsx|jsx)$/': '<rootDir>/node_modules/babel-jest',
//     '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
//   },
// };

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src', '<rootDir>/pages'],
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@icons/(.*)': '<rootDir>/public/icons/$1',
    '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['components/**/*.{js,jsx,ts,tsx}', 'pages/**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
