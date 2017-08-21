module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [ "react" ],
  "rules": {
    "indent": ["error", "tab"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-mixed-spaces-and-tabs": [0, false],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  }
};
