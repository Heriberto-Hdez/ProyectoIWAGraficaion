/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
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
        templateUrl: 'views/inicio.jsp',
        controller: 'inicioCtrl'
      })
     .when('/informacion', {
        templateUrl: 'views/informacion.jsp',
        controller: 'informacionCtrl'
      })
      .when('/acerca', {
        templateUrl: 'views/acerca.jsp',
        controller: 'acercaCtrl'
      })
	  .when('/tecnologias', {
        templateUrl: 'views/tecnologias.jsp',
        controller: 'tecnologiasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });