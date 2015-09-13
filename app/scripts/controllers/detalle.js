'use strict';

/**
 * @ngdoc function
 * @name truequeStamplayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the truequeStamplayApp
 */
angular.module('truequeStamplayApp')
  .controller('DetalleCtrl', function ($scope,$routeParams) {

  	$scope.id=$routeParams.id;

    this.getItem = function(){
     var url="https://trueque.stamplayapp.com/api/cobject/v1/item/"+$scope.id;
		$.get( url, function( data ) {
		 $scope.objeto = data;
		 console.log(data);
		});

    }

    this.getItem();

  });
