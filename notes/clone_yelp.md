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
```
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
The hjs-webpack includes an option called clearBeforeBuild to blow away any previous built files before it starts building new ones. We like to turn this on to clear away any strangling files from previous builds.
```js
var config = getConfig({
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist'),
  clearBeforeBuild: true
})
```
We'll usually create a few path variables to help us optimize our configuration when we start modifying it from it's default setup.
```js
const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})
```
Now, the hjs-webpack packages sets up the environment specific (dev vs prod) configuration using the first argument value process.argv[1], but can also accept an option to define if we're working in the development environment called isDev.
A development environment sets up a server without minification can accepts hot-reloading whereas a produciton one does not. Since we'll use the value of isDev later in our configuration, we'll recreate the default value in the same method. Alternatively, we can check to see if the NODE_ENV is development.
```js
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
// alternatively, we can use process.argv[1]
// const isDev = (process.argv[1] || '')
//                .indexOf('hjs-dev-server') !== -1;

// ...
var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
})
```
Webpack expects us to export a configuration object from the webpack.config.js file, otherwise it won’t have access to the config variable. We can export the config object by adding the module.exports at the end of the file:
```js
// ...
var config = getConfig({
  // ...
})

module.exports = config;
```
### React
In order to actually build a react app we'll need to include the react dependency. Unlike the previous dependencies, we'll include react (and it's fellow reat-dom) as an app dependency, rather than a develpment dependency.
```
npm install --save react react-dom
```
We'll also install react router to handle some routing for us as we'll have multiple routes in our app, including a map place as well as details page for finding more details about each place we'll list.
```
npm install --save react-router
```
A handy shorcut for installing and saving dependencies with the npm command:
```
npm i -S [dependencies]
e.x.  npm i -S react react-dom
```
To install and save development dependencies, change the -S to -D, i.e.:
```
npm i -D [dependencies]
```

Creating our app.js
We can't start building our application without an entry file (as we added in the webpack configuration above). We'll come back to build our React app with a real app container, but let's make sure our server and build process are working up through this point.
Let's first start by setting up our app.js with a dummy react app. Create a file called src/app.js.
In this file, let's create a simple React container to house a single component with some random text. First, includiing the dependencies that webpack will bundle in our completed appication bundle:
```js
import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>);
  }
});
```
We will need to mount the <App /> component on the page before we can see it working. The hjs-webpack package includes a minimal index.htmal it will generate if we don't describe a custom one(using the html key in the configuration object). The default template includes a <div /> component with an id of root just for the purpose of setting up a Single Page App.
```js
import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render: function() {
    return (<div>Text text text</div>)
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
```
With the src/app.js in place, let's boot up the server. The hjs-webpack package installs one for use by default in the ./node_modules directory. We can refer directly to it to start the server:
```
./node_modules/.bin/hjs-dev-server
```

Set up a script in package.json:
```json
{
  "name": "yelp",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "start": "./node_modules/.bin/hjs-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```
It's usually a good idea to explicitly set the NODE_ENV inour scripts. With the NODE_ENV set, we can depend upon it's value in our configuration and app.
Modify the start script to inlcude the NODE_ENV environment environment vairable:
```json
{
  "scripts": {
    "start": "NODE_ENV=development \
           ./node_modules/.bin/hjs-dev-server",
 }
}
```
