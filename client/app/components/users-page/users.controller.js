(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = [
    'usersService',
    '$scope',
    'users',
    '$location',
  ];

  function UsersCtrl(usersService, $scope, users, $location) {
    var vm = this;
    vm.users = users;

    vm.breadcrumbs = [{
      name: 'Users',
      url: ''
    }]

    vm.goToEdit = function(id) {
      $location.path( ['/users', id].join('/') );
    }
  }
})();
