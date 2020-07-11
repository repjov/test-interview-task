'use strict';

var Users = require('./user.model');

/**
 * GET /users
 *
 * @description
 * list of users
 *
 */
exports.find = function(req, res, next) {
  Users
    .find({})
    .populate('role')
    .exec(function(err, users) {
        if (err) {
          return next(err);
        }
        return res.status(200).json(users);
      });
};

/**
 * GET /users/:id
 *
 * @description
 * Find user by id
 *
 */
exports.get = function(req, res, next) {
  Users
    .findById(req.params.id)
    .populate('role')
    .exec(function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(404).send('Not Found');
      }
      return res.status(200).json(user);
    });
};

/**
 * POST /users
 *
 * @description
 * Create a new user
 *
 */
exports.post = function(req, res, next) {
  Users.create(req.body, function(err, user) {
    if (err) {
      return next(err);
    }
    return res.status(201).json(user);
  });
};

/**
 * PUT /users/:id
 *
 * @description
 * Update a user
 *
 */
exports.put = function(req, res, next) {
  Users.findById(req.params.id, function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(404).send('Not Found');
    }

    user.name = req.body.name;
    user.description = req.body.description;

    user.save(function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(user);
    });
  });
};
