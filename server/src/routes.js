'use strict';

var express = require('express');
var router = express.Router();

var users = require('./users/users.controller');
var roles = require('./roles/roles.controller');

// things ressources
router.get('/api/users', users.find);
router.get('/api/users/:id', users.get);
router.post('/api/users', users.post);
router.put('/api/users/:id', users.put);
router.get('/api/roles', roles.find);

module.exports = router;
