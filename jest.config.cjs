module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.cjs' }],
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
