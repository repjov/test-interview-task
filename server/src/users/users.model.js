'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  role: String,
});

module.exports = mongoose.model('Users', UsersSchema);
