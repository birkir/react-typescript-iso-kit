import path from 'path';
import http from 'http';
import express from 'express';
import webpack from 'webpack';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';
import routes from './routes';

const port = (parseInt(process.env.PORT, 10) || 3000) - !!__DEV__;
const app = express();

// Set view engine
app.set('views', './src/server/views');
app.set('view engine', 'ejs');
app.use('/styles.css', express.static('./build/styles.css'));
app.use('/client.js', express.static('./build/client.js'));

// Route handler that rules them all!
app.get('*', (req, res) => {

  // Do a router match
  match({
    routes: (<Router>{routes}</Router>),
    location: req.url,
  },
  (err, redirect, props) => {

    // Some sanity checks
    if (err) {
      return res.status(500).send(err.message);
    } else if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    } else if (!props) {
      return res.status(404).send('not found');
    }

    // Respond with EJS template
    res.render('index', {
      includeStyles: true,
      includeClient: true,
      renderedRoot: ReactDOMServer.renderToString(<RouterContext {...props} />)
    });
  });
});

const server = http.createServer(app);

server.listen(port, err => {
  if (err) throw err;
  console.info(`[🚀 ] Server started on port ${port}`); // eslint-disable-line
});