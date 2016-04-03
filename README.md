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