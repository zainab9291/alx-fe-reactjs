// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom", // عشان React components تشتغل
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // تحويل ملفات React
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // عشان نستعمل matchers زي toBeInTheDocument
  moduleNameMapper: {
    // لو عندك استايلز أو صور ممكن تتعمل mock
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
};