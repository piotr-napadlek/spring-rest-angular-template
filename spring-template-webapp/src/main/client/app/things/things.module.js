angular.module('app.things', ['ngRoute', 'app.main'])
    .config(function ($routeProvider) {
    'use strict';

    $routeProvider.when('/things', {
        templateUrl: 'things/list.html',
        controller: 'ThingsListController'
    });
});
