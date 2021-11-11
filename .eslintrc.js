module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/state-in-constructor": "off",
    "react/prop-types": "off",
    "react/no-access-state-in-setstate": "error",
    "react/no-danger": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-will-update-set-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "react/jsx-props-no-spreading": "off",

    // overriding recommended rules
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-underscore-dangle": ["error"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
      },
      alias: {
        map: [
          ["@/public", "./public"],
          ["@/styles", "./styles"],
          // Add more here
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
