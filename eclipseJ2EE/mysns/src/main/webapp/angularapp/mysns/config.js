'use strict';

var snsApp = angular.module('mySNS', [
    'ngRoute',
    'snsController'
]);

snsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/login', {
            templateUrl: 'mysns/partials/login.html',
            controller: 'loginController'
        }).
        when('/SNS', {
            templateUrl: 'mysns/index.html',
            controller: 'test'
        }).
        when('/home', {
            templateUrl: 'mysns/partials/home.html',
            controller: 'homeController'
    });
}]);

