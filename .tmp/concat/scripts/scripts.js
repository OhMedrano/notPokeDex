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
  .config(["$routeProvider", function ($routeProvider) {
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
  }]);

'use strict';

/**
 * @ngdoc function
 * @name pokeDexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokeDexApp
 */
angular.module('pokeDexApp')
  .controller('MainCtrl', ["$scope", "pokeMons", "$routeParams", "$location", "$http", function ($scope,pokeMons,$routeParams,$location,$http) {

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






  }]);

'use strict';

/**
 * @ngdoc function
 * @name pokeDexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pokeDexApp
 */
angular.module('pokeDexApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc service
 * @name pokeDexApp.pokeMons
 * @description
 * # pokeMons
 * Service in the pokeDexApp.
 */
angular.module('pokeDexApp')
  .service('pokeMons', ["$http", "$resource", function ($http,$resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    	return $http.get('http://pokeapi.co/api/v2/pokemon-species').success(function(data){
    		return data;
    	});

    		
  }]);






'use strict';

/**
 * @ngdoc function
 * @name pokeDexApp.controller:PokedetailCtrl
 * @description
 * # PokedetailCtrl
 * Controller of the pokeDexApp
 */
angular.module('pokeDexApp')
  .controller('PokedetailCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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

'use strict';

/**
 * @ngdoc filter
 * @name pokeDexApp.filter:changeLang
 * @function
 * @description
 * # changeLang
 * Filter in the pokeDexApp.
 */
angular.module('pokeDexApp')
  .filter('changeLang', function () {
    return function (data) {
   			 var codeKey = [
                          {"ids":"en","names":"English"},
                          {"ids":"it","names":"Italian"},
                          {"ids":"es","names":"Spanish"},
                          {"ids":"de","names":"German"},
                          {"ids":"fr","names":"French"},
                          {"ids":"ko","names":"Korean"},
                          {"ids":"zh","names":"Chinese"},
                          {"ids":"roomaji","names":"Romanji"},
                          {"ids":"ja","names":"Japanese"},
                          {"ids":"ja-kanji","names":"Japanese(Kanji)"}

                  ];

                  for(var x=0;x<codeKey.length;x++){
                  	if(data == codeKey[x].ids){
                  		return codeKey[x].names;
                  	}
                  }



    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name pokeDexApp.directive:weightDir
 * @description
 * # weightDir
 */
angular.module('pokeDexApp')
  .directive('weightDir', function () {
    return {
     	scope:{
     		weight: "=weight"
     	},	
      template: '<div>{{weight.weight}}</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
  /*     		
      	scope.metricWeight = function(wValue){
      		var intitalW = wValue.toString(),
      			result;

      		for(var x=0;x<intitalW.length-1;x++){
      			if(x == intitalW.length-1){
      				result.push()
      			}
      		}

      	};
*/


      		
      	scope.$watch('weight',function(newVal,oldVal){
      		scope.weight = newVal;

      		scope.weightt = scope.weight.weight.toString();

      		console.log(scope.weightt);

      	});





      }
    };
  });
