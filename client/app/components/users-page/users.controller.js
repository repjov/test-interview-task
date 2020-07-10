(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['usersService', '$scope', 'users'];

  function UsersCtrl(usersService, $scope, users) {
    var vm = this;
    vm.users = users;
  }
})();
