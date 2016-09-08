angular.module('app.main', ['ngRoute']).config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {redirectTo: '/main/welcome'})
        .when('/main/welcome', {templateUrl: 'main/welcome/welcome.html'})
        .otherwise({templateUrl: 'main/page-not-found/page-not-found.html'});
});
