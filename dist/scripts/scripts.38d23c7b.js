"use strict";angular.module("pokeDexApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/PKMN/:id",{templateUrl:"views/pokedetail.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("pokeDexApp").controller("MainCtrl",["$scope","pokeMons","$routeParams","$location","$http",function(a,b,c,d,e){e.get("http://pokeapi.co/api/v2/pokemon/?limit=861").success(function(b){a.pokemons=b}),a.findOne=function(){a.route=c.id,console.log(a.route),e.get("http://pokeapi.co/api/v2/pokemon-species/"+a.route).success(function(b){a.currentPKMN=b}),e.get("http://pokeapi.co/api/v2/pokemon/"+a.route).success(function(b){a.PKMN=b})},a.langz,a.whichDisplay=0}]),angular.module("pokeDexApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pokeDexApp").service("pokeMons",["$http","$resource",function(a,b){return a.get("http://pokeapi.co/api/v2/pokemon-species").success(function(a){return a})}]),angular.module("pokeDexApp").controller("PokedetailCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("pokeDexApp").filter("weight",function(){return function(a){var b=a.toString().split(""),c=b.length;return b.splice(c-1,0," . "),b.join(" ")}}),angular.module("pokeDexApp").filter("changeLang",function(){return function(a){for(var b=[{ids:"en",names:"English"},{ids:"it",names:"Italian"},{ids:"es",names:"Spanish"},{ids:"de",names:"German"},{ids:"fr",names:"French"},{ids:"ko",names:"Korean"},{ids:"zh",names:"Chinese"},{ids:"roomaji",names:"Romanji"},{ids:"ja",names:"Japanese"},{ids:"ja-kanji",names:"Japanese(Kanji)"}],c=0;c<b.length;c++)if(a==b[c].ids)return b[c].names}}),angular.module("pokeDexApp").directive("weightDir",function(){return{scope:{weight:"=weight"},template:"<div>{{weight.weight}}</div>",restrict:"E",link:function(a,b,c){a.$watch("weight",function(b,c){a.weight=b,a.weightt=a.weight.weight.toString(),console.log(a.weightt)})}}});