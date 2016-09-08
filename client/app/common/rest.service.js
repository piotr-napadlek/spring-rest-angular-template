angular.module('app.common').factory('restService', function ($http, currentContextPath) {
    'use strict';

    var currentContext = currentContextPath.get();
    return {

        read: function (path, params) {
            return $http.get(currentContext + path, {
                timeout: 10000,
                params: params
            });
        }
    };
});
