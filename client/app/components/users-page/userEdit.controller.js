(function() {
	'use strict';

	angular
		.module('app')
		.controller('UserEditCtrl', UserEditCtrl);

	UserEditCtrl.$inject = [
		'usersService',
		'$scope',
		'user',
		'roles',
		'$location',
	];

	function UserEditCtrl(usersService, $scope, user, roles, $location) {
		var vm = this;
		vm.user = user;

		vm.breadcrumbs = [
			{
				name: 'Users',
				url: 'users',
			},
			{
				name: 'Edit User',
				url: '',
			}
		];

		vm.goToEdit = function(id) {
			$location.path( ['/users', id].join('/') );
		}
	}
})();
  