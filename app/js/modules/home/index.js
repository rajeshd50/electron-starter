'use strict';

module.exports = angular.module('Home', [])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: require('./templates/login.html'),
                // templateUrl: './templates/login.html',
                controller: 'LoginController as vm',
                // pageTitle: 'login-page'
            });
    }])
    .controller('LoginController', require('./controllers/login'));