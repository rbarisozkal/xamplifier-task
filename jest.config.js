module.exports = {
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "json", "vue"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.vue", "src/**/*.js"],
};
