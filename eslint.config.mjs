import globals from 'globals';

export default [
  {
    files: ['src/**/*.js'], 
    languageOptions: {
      ecmaVersion: 2021,      
      sourceType: 'module',   
      globals: {
        ...globals.browser,   
        ...globals.jest,      
      },
    },
    rules: {
      'no-unused-vars': 'warn',  
      'no-console': 'off',       
    },
  },
];
