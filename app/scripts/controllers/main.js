'use strict';

angular.module('karmaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.helloWorld = function() {
    	console.log('helloworld');
    }
  });
