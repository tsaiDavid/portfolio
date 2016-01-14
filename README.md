# David Tsai - Portfolio

My personal portfolio: a **universal / isomorphic rendering** application in React and Redux.

[Live Example Avail. Soon](http://www.whataniceguy.com)

Some technologies utilized here include:
* React
* Redux
* React Router & Redux Simple Router
* Node / Express
* Webpack
* Babel 6
* Eslint
* SASS
* Immutable.js

## Development Installation

In the project's directory, run the following commands:

```
$ npm install
$ npm run dev
```

This will leverage webpack-dev-server and enable hot module reloading.

Then  Visit

```
http://localhost:3000
```

## Releasing to Production

Production creates a `bundle.js` and `main.css` - these contain the scripts and stylesheets used throughout the application. Using Babel 6 throughout the project allows for easy usage of ES6/ES7 syntax and lazy loading of stylesheets, if so desired.

In the project's directory, run the following commands:

```
$ npm run build
$ npm start
```

I was able to deploy very easily to Heroku by taking advantage of a postinstall script. This required me to move my dev-dependencies up to production.

Then Visit

```
http://localhost:3000
```
