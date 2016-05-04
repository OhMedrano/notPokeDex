'use strict';

/**
 * @ngdoc function
 * @name pokeDexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokeDexApp
 */
angular.module('pokeDexApp')
  .controller('MainCtrl', function ($scope,pokeMons,$routeParams,$location,$http) {

  		$http.get('http://pokeapi.co/api/v2/pokemon/?limit=861').success(function(data){
  			$scope.pokemons = data;
  		});
  	

  		$scope.findOne = function(){
  			$scope.route = $routeParams.id;
  			console.log($scope.route);

  			$http.get('http://pokeapi.co/api/v2/pokemon-species/'+$scope.route).success(function(data){
  					$scope.currentPKMN = data;

  					
  			});

        $http.get('http://pokeapi.co/api/v2/pokemon/'+$scope.route).success(function(data){
          $scope.PKMN = data;
        });
  		};


      $scope.langz;

      $scope.whichDisplay = 0;






  });
