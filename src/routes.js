const express = require('express');
const routes = express.Router();

const gateway = require('./controller/gateway.controller');

routes.get('/get-numbers', gateway.retrieveDatabase);
routes.post('/add-numbers', gateway.fillDatabase);

module.exports = routes;