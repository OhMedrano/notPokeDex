'use strict';

/**
 * @ngdoc overview
 * @name pokeDexApp
 * @description
 * # pokeDexApp
 *
 * Main module of the application.
 */
angular
  .module('pokeDexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/PKMN/:id', {
        templateUrl: 'views/pokedetail.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
