import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 未使用変数のエラーを制御（開発時）
      "@typescript-eslint/no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      }],
      // any型の使用を警告にする（MVP開発用）
      "@typescript-eslint/no-explicit-any": "warn",
      // React Hook Form と Zod の統合のため
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
