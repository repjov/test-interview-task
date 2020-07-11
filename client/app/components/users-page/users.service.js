(function() {
  'use strict';

  angular
    .module('app')
    .service('usersService', UsersService);

  UsersService.$inject = ['$http', 'api'];

  function UsersService($http, api) {
    var self = this;

    // get list of users from BE
    this.getUsers = function() {
      return api.get('users');
    };

    // get users by id from BE
    this.getUserById = function(id) {
      return api.get(['users', id].join('/'));
    };

     // get list of roles from BE
     this.getRoles = function(id) {
      return api.get(['roles', id].join('/'));
    };

    return self;
  }

})();
