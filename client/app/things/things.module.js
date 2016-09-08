angular.module('app.things', ['ngRoute', 'app.main', 'app.common'])
    .config(function ($routeProvider) {
    'use strict';

    $routeProvider.when('/things', {
        templateUrl: 'things/list.html',
        controller: 'ThingsListController'
    });
});
