'use strict';

var app = angular.module('mnApp', [])
    .controller('mainCtrl', ['$scope', function($scope){
        $scope.greeting = 'Welcome!';
    }]);