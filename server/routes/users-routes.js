const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('hey you');
});

module.exports = routes;
