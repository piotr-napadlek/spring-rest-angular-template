angular.module('app', ['ngRoute',  'app.main', 'app.things', 'app.common'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    });
