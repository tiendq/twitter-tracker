const express = require('express');
const middleware = require('./middleware');
const router = require('./router');

let app = express();

app.use(middleware.parseQuery({ allowDots: true }));
app.use(router.middleware());

module.exports = app;
