import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  
  {
    files: ["src/**/*.js"],  
    languageOptions: {
      ecmaVersion: 2021,      
      sourceType: "module",   
      globals: globals.browser, 
    },
    rules: {
      
      "no-unused-vars": "warn", 
      "no-console": "off",     
    },
  },
  
];