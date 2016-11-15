'use strict'
// var x = require('usb');
angular.module('MyApp', [
        'ui.router',
        'ui.bootstrap',
        'ngMaterial',
        require('./modules').name
    ])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        console.log('in config');
        var wireless = new Wireless({
            iface: 'wlp6s0',
            updateFrequency: 10, // Optional, seconds to scan for networks
            connectionSpyFrequency: 2, // Optional, seconds to scan if connected
            vanishThreshold: 2 // Optional, how many scans before network considered gone
        });

        wireless.enable(function (err) {
            wireless.start();
        });

        console.log(wireless);

        $urlRouterProvider.when('', '/login');
        $urlRouterProvider.when('/', '/login');
        $urlRouterProvider.otherwise('/404');
    }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["MyApp"]);
});