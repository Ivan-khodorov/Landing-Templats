/** ESLint config (classic) */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
    project: undefined
  },
  env: { browser: true, es2022: true, node: true },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "unused-imports"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {
        project: ".",
      },
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    }
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",

    "import/order": ["warn", {
      "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
      "newlines-between": "always",
      "alphabetize": { order: "asc", caseInsensitive: true },
      "pathGroups": [
        { pattern: "@/**", group: "internal", position: "before" },
        { pattern: "@app/**", group: "internal", position: "before" },
        { pattern: "@components/**", group: "internal", position: "before" },
        { pattern: "@pages/**", group: "internal", position: "before" }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"]
    }],

    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
  },
  ignorePatterns: [
    "dist", "build", "coverage", "node_modules",
    "*.config.*", "vite.config.*", "playwright.config.*"
  ]
};
