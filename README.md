# fp.js (functional programming) 
[![Build Status](https://travis-ci.org/Pietroiu/fp.svg?branch=master)](https://travis-ci.org/Pietroiu/fp)

Simple functional programing library ( just 13.7kb ). Library contains multiple pure functions to help you make the code more easy to manage. All methods are curried and they use a function first, value last approach.
### Usage
To use it in the browser just add a script tag with the path to ./src/index.js.
```html
<script type="application/javascript" src="/src/index.js"></script>
```
### Webpack / Imports
To use this with webpack / imports just include the modules you need from ./modules.
```javascript
import {compose} from './modules/compose';
```
### Install
Install all the npm modules required for the build.
```
npm install
```
### Build For Web
The file is already built in ./src/index.js but if you want to exclude some of the functions you can do that from ./build.json and the global variable name (default is "window.fp"), you can change that from ./index.js line 3. Then build using the command bellow.
```
npm run build
```
### Lint
The project uses [ESLint](https://eslint.org/) to check the build transpiled file ./src/index.js.
```
npm run lint
```
## Running the tests
Make sure you have all the npm modules installed. The tests use [Jest](https://jestjs.io/) and you only need to run this command:
```
npm run test
```
