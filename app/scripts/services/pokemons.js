'use strict';

/**
 * @ngdoc service
 * @name pokeDexApp.pokeMons
 * @description
 * # pokeMons
 * Service in the pokeDexApp.
 */
angular.module('pokeDexApp')
  .service('pokeMons', function ($http,$resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    	return $http.get('http://pokeapi.co/api/v2/pokemon-species').success(function(data){
    		return data;
    	});

    		
  });





