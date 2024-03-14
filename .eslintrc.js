module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@react-native-community',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};

// "eslintConfig": {
//   "extends": [
//     "@react-native-community",
//     "prettier",
//     "plugin:react/jsx-runtime",
//     "plugin:@typescript-eslint/recommended"
//   ],
//   "rules": {
//     "no-unused-vars": "off",
//     "@typescript-eslint/no-unused-vars": [
//       "warn"
//     ]
//   }
// }
