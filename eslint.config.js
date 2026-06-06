import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "semi": ["error", "always"],
      'react/react-in-jsx-scope': 'off',
      "react/prop-types": "off",
      "no-undef": "error",
    }
  },
  {
    files: ["**/*.test.{js,jsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.vitest } },
  },
]);
