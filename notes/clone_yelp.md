The question is: how to build large applications with React and how to integrate external APIs.

## Topic:
- Setup a new React project from scratch
- create a basic React components
- Write modular CSS using postcss
- Setup testing
- Route to different pages with react-router
- Integrate with Google Maps
- Write Google Maps React component
- Write five-star rating component


## Setup
We will use some javaScript feature of ES6, inline css modules, async module loading, tests. We'll use webpack for it's ease of babel implementation as well as a few other convenient feature it provides.

To create a new node project:
```bash
$ mkdir yelp && cd $_
$ mkdir -p src/{components,containers,styles,utils,views}\
  && touch webpack.config.js
```
Init the *package.json* project without answering any questions:
```
npm init -y
```
### Babel
Babel is a *JavaScript compiler* that allows us to use the next generation JavaScript today.

Install babel requirement with a few babel presets:
```
 npm install --save-dev babel-core babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0
```
To configure babel so our application will compile, create a file called *.babelrc* with the following content
```
{
   "presets": ["es2015", "stage-0", "react"]
 }
```
Babel allows us to configure different options for different operating environments using the env key in the babel configuration object. We'll include the babel-hmre preset only in our development environment (so our production bundle doesn't include the hot reloading JavaScript)
```
{
  "presets": ["es2015", "stage-0", "react"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```

### webpack
Setting up webpack can be much easier with the help of a well-built webpack start tool called hjs-webpack.
The hjs-webpack build tool sets up common loaders for both development and prodution environments, including hot reloading, minification, ES6 templates,etc.
Grab the webpack dependencies, incluidng the hjs-webpack pakage.
```
npm install --save-dev hjs-webpack webpack
```
Webpack is a tad useless without any loaders or any configuration set. Install the babel-loader, css/styles, as well as the url and file loaders (for font-loading, built-in to hjs webpack)
```
npm install --save-dev babel-loader css-loader style-loader postcss-loader url-loader file-loader
```
In the *webpack.config.js* at the root directory, let's get our webpack module started. First, get some require statement:
```js
const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');
```
The hjs-webpack package exports a single function that accepts a single argument, an object that defines some simple configuration to define a required webpack configuration. There are only two required keys in this object:
* in - A single entry file
* out - the path to a directory to generate files
```
var config = getConfig({
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist')
})
```
