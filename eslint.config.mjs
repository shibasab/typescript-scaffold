import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist", "coverage"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "off",
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionDeclaration",
          message: "関数定義はアロー関数を使用してください。",
        },
        {
          selector: "FunctionExpression",
          message: "関数定義はアロー関数を使用してください。",
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
      ],
    },
  },
];
