(function() {
  'use strict';

  angular
    .module('app')
    .directive('ulist', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/users-page/directives/users-list/usersList.html',
        controller: UsersListCtrl,
        controllerAs: 'ulistVm',
        bindToController: {
          users: '='
        },
      };
    });

  UsersListCtrl.$inject = ['$http', 'usersService'];

  function UsersListCtrl() {
    var vm = this;
    console.log('||>>>>', this);
    // vm.users = $scope.ulistVm.users;
  }
})();
