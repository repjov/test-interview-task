(function() {
  'use strict';

  angular
    .module('app')
    .service('usersService', UsersService);

  UsersService.$inject = ['$http', 'api'];

  function UsersService($http, api) {
    var self = this;
    // get lidt of users from BE
    this.getUsers = function() {
      return api.get('users');
    };

    return self;
  }
})();
