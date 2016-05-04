'use strict';

/**
 * @ngdoc filter
 * @name pokeDexApp.filter:weight
 * @function
 * @description
 * # weight
 * Filter in the pokeDexApp.
 */
angular.module('pokeDexApp')
  .filter('weight', function () {
    return function (input) {
      
      var stuff = input.toString().split('');
      var stufflen = stuff.length;


      stuff.splice(stufflen-1, 0, ' . ');



      return stuff.join(" ");




    };
  });
