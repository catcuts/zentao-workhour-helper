import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            indent: ["error", 4],
            "no-console": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
        },
        ignores: ["node_modules/**", "dist/**"],
    },
];
