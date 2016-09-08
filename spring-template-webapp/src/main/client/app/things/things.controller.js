angular.module('app.things').controller('ThingsListController', function (restService, $scope) {
    'use strict';

    $scope.things = [];

    $scope.search = function () {
        restService.read('/rest/thing').then(function (response) {
            angular.copy(response.data, $scope.things);
        });
    };

});
