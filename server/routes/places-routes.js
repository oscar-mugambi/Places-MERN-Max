const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({
    message: 'hey',
  });
});

module.exports = routes;
