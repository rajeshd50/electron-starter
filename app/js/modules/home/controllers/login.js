'use strict';
var os = require('os');

module.exports = [
    '$scope',
    '$state',
    '$rootScope',
    function ($scope, $state, $rootScope) {
        var vm = this;
        vm.text = 'View Info';
        vm.osArch = os.arch();
        child_process.exec('ifconfig',function(err,data) {
            console.log(err,data);
        })
        console.log(os);
    }
];