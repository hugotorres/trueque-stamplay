'use strict';

/**
 * @ngdoc overview
 * @name truequeStamplayApp
 * @description
 * # truequeStamplayApp
 *
 * Main module of the application.
 */
angular
  .module('truequeStamplayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch','ngStamplay'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
       .when('/detalle/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl',
        controllerAs: 'detalle',
      })
       .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl',
        controllerAs: 'new',
      })
      .otherwise({
        redirectTo: ''
      });
  });
