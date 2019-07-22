# fp.js (functional programming) 
[![Build Status](https://travis-ci.org/Pietroiu/fp.svg?branch=master)](https://travis-ci.org/Pietroiu/fp) ![GitHub file size in bytes](https://img.shields.io/github/size/pietroiu/fp/src/index.js.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/pietroiu/fp.svg) ![GitHub top language](https://img.shields.io/github/languages/top/pietroiu/fp.svg) [![License: MIT](https://img.shields.io/github/license/Pietroiu/fp.svg)](https://opensource.org/licenses/MIT) [![Depfu](https://badges.depfu.com/badges/23d6c35858d2c06949a9ed85bd51ffc0/overview.svg)](https://depfu.com/github/Pietroiu/fp?project_id=7426) ![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)

Simple functional programing library. Library contains multiple pure functions to help you make the code more easy to manage. All methods are curried and they use a function first, value last approach.
### Usage
To use it in the browser just add a script tag with the path to ./src/index.js.
```html
<script type="application/javascript" src="/node_modules/fp/src/index.js"></script>
```
### Webpack / Imports
To use this with webpack / imports just include the modules you need from 'fp'.
```javascript
import {get,map,compose,reduce} from 'fp';
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
### Start http-server
The [http-server](https://www.npmjs.com/package/http-server) can be started using the npm command bellow. You can use the library in the browser on the test server page using "fp" key from window object.
```
npm run start
```
