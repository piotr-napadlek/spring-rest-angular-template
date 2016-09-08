(function () {
    'use strict';

    /**
     * Router module describing all redirections.
     */
    angular.module('app.router', [
        'ngRoute'
    ])

        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {redirectTo: '/main/welcome'})
                .when('/main/welcome', {templateUrl: 'main/welcome/welcome.html'})
                .when('/things', {templateUrl: 'things/list.html'})
                .otherwise({templateUrl: 'main/page-not-found/page-not-found.html'});
        });
})();
