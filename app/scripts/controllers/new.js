'use strict';

/**
 * @ngdoc function
 * @name truequeStamplayApp.controller:NewCtrl
 * @description
 * # AboutCtrl
 * Controller of the truequeStamplayApp
 */
angular.module('truequeStamplayApp')
  .controller('NewCtrl', function () {
   this.crear = function(){

   $.post( 'https://trueque.stamplayapp.com/api/cobject/v1/item', $('form#new').serialize(), function(data) {
       if(data.verificationCode) 
        	alert('Item correctamente creado') ;
       },
       'json' // I expect a JSON response
    ).done(function() {
    console.log( "datos guardados success" );
  })
  .fail(function() {
    alert( "error" );
  });

   }
  });