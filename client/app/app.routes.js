(function() {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
      url: '/',
      template: '<welcome></welcome>',
    });

    $stateProvider.state('users', {
      name: 'users',
      url: '/users',
      templateUrl: 'app/components/users-page/users.html',
      controller: 'UsersCtrl',
      controllerAs: 'vmUsers',
      resolve: {
        users: function(usersService) {
          return usersService.getUsers();
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  }
})();
