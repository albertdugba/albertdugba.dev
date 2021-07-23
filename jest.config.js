module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', 'node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.js'],
  moduleNameMapper: {
    '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
  transform: {
    '/^.+.(js|ts|tsx|jsx)$/': '<rootDir>/node_modules/babel-jest',
    '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
};
