// @ts-check

import eslint from "@eslint/js";
import eslintCdkPlugin from "eslint-cdk-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default [
  {
    ...eslint.configs.recommended,
  },
  perfectionist.configs["recommended-natural"],
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["amplify/backend.ts", "**/resource.ts", "**/*.construct.ts"],
    ...eslintCdkPlugin.configs.recommended,
  },
  {
    files: ["amplify/backend.ts", "**/resource.ts", "**/*.construct.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": 0,
    },
  },
];
