export default {
  '*': 'npm run prettier-check',
  '*.{ts,tsx,js,mjs,jsx}': ['npm run lint', 'npm run test'],
};
