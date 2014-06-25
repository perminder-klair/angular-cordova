'use strict';

angular.module('angularCordovaApp')
  .controller('MainCtrl', function ($scope, cordova) {

    cordova.ready.then(function () {
        alert('Cordova is ready');
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
