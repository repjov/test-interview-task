'use strict';

var express = require('express');
var router = express.Router();

var users = require('./users/users.controller');

// things ressources
router.get('/api/users', users.find);
router.get('/api/users/:id', users.get);
router.post('/api/users', users.post);
router.put('/api/users/:id', users.put);
// router.delete('/api/users/:id', users.delete);

module.exports = router;
