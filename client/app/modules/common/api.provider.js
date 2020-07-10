(function() {
  'use strict';

  angular
    .module('common')
      .provider('api', function() {
        var options = {
          apiUrl: '',
        };

        this.setUrl = function(url) {
          options.apiUrl = url;
        }

        this.$get = function($http, $q) {
          var self = this;
          self.responseErrorHandlers = [];
          self.errors = [];

          self.getErrors = function() {
            return self.errors;
          }

          // handle success
          var defaultSuccessHandler = function(response) {
            return response.data;
          };

          // handle errors
          var defaultErrorHandler = function(error) {
            angular.forEach(self.responseErrorHandlers, function(handler) {
                handler(error);
            });
            return $q.reject(error);
          };

          var url = function(name) {
            return options.apiUrl + name;
          };

          /**
           * Generic GET method call
           * @param name
           * @param {Object} [params]
           * @returns {Promise}
           */
          self.get = function(name, params) {
            return $http({
                method: 'GET',
                url: url(name),
                cache: true,
                params:params
            }).then(defaultSuccessHandler, defaultErrorHandler);
          };

          /**
           * Generic POST method call
           * @param name
           * @param params
           * @param data
           * @returns {Promise}
           */
          self.post = function(name, params, data) {
              return $http({
                  method: 'POST',
                  url: url(name),
                  params: params,
                  data: data
              }).then(defaultSuccessHandler, defaultErrorHandler);
          };

          /**
           * Generic DELETE method call
           * @param name
           * @param params
           * @returns {Promise}
           */
          self.delete = function(name, params) {
              return $http({
                  method: 'DELETE',
                  url: url(name),
                  params: params
              }).then(defaultSuccessHandler, defaultErrorHandler);
          };

          /**
           * Generic PUT method call
           * @param name
           * @param params
           * @param data
           * @returns HttpPromise
           */
          self.put = function(name, params, data) {
              return $http({
                  method: 'PUT',
                  url: url(name),
                  params: params,
                  data: data
              }).then(defaultSuccessHandler, defaultErrorHandler);
          };
          return self;
        };
      });

})();
