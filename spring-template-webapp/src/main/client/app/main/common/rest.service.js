angular.module('app.main').factory('restService', function ($http) {
    'use strict';

    return {

        read: function (path, params) {
            return $http.get(path, {
                timeout: 10000,
                params: params
            });
        }
    };
});
