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
