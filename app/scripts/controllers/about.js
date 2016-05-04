'use strict';

/**
 * @ngdoc function
 * @name pokeDexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pokeDexApp
 */
angular.module('pokeDexApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
