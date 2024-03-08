module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:eslint-plugin-prettier/recommended', // Prettier 플러그인 사용
    'prettier', // Turns off ESLint rules that might conflict with prettier
  ],
  plugins: ['eslint-plugin-simple-import-sort', 'eslint-plugin-prettier'],
  rules: {
    //'@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          [
            '^next:',
            // Node.js builtins prefixed with `node:`.
            '^node:',
            // React-related packages.
            '^react$',
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            '^',
            // Relative imports.
            // Anything that starts with a dot.
            '^\\.',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
  },
};
