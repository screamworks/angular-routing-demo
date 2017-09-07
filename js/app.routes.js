angular.module('routing').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home',{
        templateUrl: '../views/home.html',
        url: '/',
        controller: 'homeCtrl'
      })
      .state('characters', {
        url: "/characters",
        controller: 'characterCtrl',
        templateUrl: '../views/characters.html',
        resolve: {
          characters: function(characterSrvc){
            return characterSrvc.getCharacters().then(function(response){
              return response;
            })
          }
        }
      })
      .state('character',{
        url: '/character/:charId',
        controller: 'detailsCtrl',
        templateUrl: "../views/details.html"
      })
});
