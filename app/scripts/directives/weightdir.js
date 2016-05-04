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
