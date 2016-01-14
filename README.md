# David Tsai - Portfolio

My personal portfolio: a **universal / isomorphic rendering** application in React and Redux. [Live Example Soon](http://www.whataniceguy.com)

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

Production has Devtools, logging and hot reloading middleware removed and the scripts/css compressed. 

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
