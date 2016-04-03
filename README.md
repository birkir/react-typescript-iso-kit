[![Travis](https://img.shields.io/travis/birkir/react-typescript-iso-kit.svg?style=flat-square)](https://travis-ci.org/birkir/react-typescript-iso-kit)
![Licence](https://img.shields.io/github/license/birkir/react-typescript-iso-kit.svg?style=flat-square)


# Minimal React Starter Kit

Webpack, React, Universal, BrowserSync, TypeScript.

## Installing

```bash
npm install
```

## Run development using client and server rendering

```bash
npm run dev
```

 - build webpack/server
 - run build/server
 - browsersync builds webpack/client
 - client hot module replacement

## Run production release

```bash
NODE_ENV=production node build/server.js
```

 - NODE_ENV=production
 - build webpack/server
 - build webpack/client