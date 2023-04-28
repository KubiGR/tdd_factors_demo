module.exports = {
  plugins: ["jest"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "require-jsdoc": 0,
  },
};
