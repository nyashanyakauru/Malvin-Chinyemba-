// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals', // or 'next'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // Disable unused vars rule
    'react/no-unescaped-entities': 'off', // Disable unescaped entities rule
  },
};