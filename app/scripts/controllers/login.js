'use strict';

/**
 * @ngdoc function
 * @name truequeStamplayApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the truequeStamplayApp
 */
angular.module('truequeStamplayApp')
  .controller('LoginCtrl', function ($scope) {

  	$scope.newUser= function(){

  		$.post( 'https://trueque.stamplayapp.com/api/user/v1/users', $('form#signIn').serialize(), function(data) {
        if(data.verificationCode) 
        	alert('USUario correctamente creado') ;
       },
       'json' // I expect a JSON response
    ).done(function() {
    console.log( "datos guardados success" );
  })
  .fail(function() {
    alert( "error" );
  });

  	}
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
