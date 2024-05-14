module.exports = {
  env: { browser: true, es2020: true, node: true },
  ignorePatterns: [
    "*.mjs",
    "*.cjs",
    "**/*.js",
    "**/dist/*",
    "**/build/*",
    "*.css",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  extends: [
    "next",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:tailwindcss/recommended",
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    "plugin:prettier/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  plugins: ["@typescript-eslint", "import", "chakra-ui"],
  rules: {
    // Most of the files will probably get extended in the future, which
    // could result into multiple refactoring. Named exports can also help
    // with tree shaking. Thats why they are preferred in general.
    "import/prefer-default-export": "off",

    // Sometimes it is just not possible for a value to be null, based on the code before.
    // Typescript doesn't have the ability to detect these cases. Then it's ok to use a no
    // null assertion.
    "@typescript-eslint/no-non-null-assertion": "off",

    // React gets imported by next.js / vite
    'react/react-in-jsx-scope': 'off',

    // This may be needed for some components
    "no-underscore-dangle": "off",

    // Imports should be grouped with spacing and should be alphabetized
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],

    // Turn on errors for missing imports
    'import/no-unresolved': 'error',

    // Disabled for void functions as this also has problems with buttons which trigger async actions on click
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],

    // This is the default configuration of the airbnb base rules. However loops got enabled again, because this rule
    // is outdated and not relevant anymore.
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Stated in the chakra ui documentation and so should be disabled
    "@typescript-eslint/unbound-method": "off",

    // Chakra rules
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error",
    "chakra-ui/require-specific-component": "error",
  },
};
