module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "react-app",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "simple-import-sort",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
          "no-alert": "error",
          'react-hooks/exhaustive-deps': 'off',
          "simple-import-sort/sort": "error",
          "import/first": "error",
          "import/newline-after-import": "error",
          "import/no-duplicates": "error",
          "react/jsx-no-target-blank": 0

    },
    "overrides": [
      {
        "files": ["*.json"],
        "rules": {
          "no-unused-expressions": "off"
        }
      }
    ]
};