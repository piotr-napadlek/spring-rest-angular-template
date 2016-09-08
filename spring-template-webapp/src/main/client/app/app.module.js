angular.module('app', ['ngRoute',  'app.main', 'app.things'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    });
