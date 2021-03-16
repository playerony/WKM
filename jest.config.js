module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/*.test.(ts|js|tsx)'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.js',

    '@tests/(.*)': '<rootDir>/src/tests/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@providers/(.*)': '<rootDir>/src/providers/$1',
    '@utilities/(.*)': '<rootDir>/src/utilities/$1',
    '@components/(.*)': '<rootDir>/src/components/$1'
  }
}
