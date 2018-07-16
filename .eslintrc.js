module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
      "jasmine": true
    },
    "rules": {
      "no-unused-vars": ["error", { "args": "none" }],
      "no-var": ["error"]
    },
    "globals": {
      "FILL_ME_IN": true,
    }
  };
  