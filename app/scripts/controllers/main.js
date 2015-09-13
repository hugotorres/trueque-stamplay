'use strict';

/**
 * @ngdoc function
 * @name truequeStamplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the truequeStamplayApp
 */
angular.module('truequeStamplayApp')
  .controller('MainCtrl', function ($scope,$stamplay) {
  	$scope.items=[];
    $scope.getItems= function(){

		$.get( "https://trueque.stamplayapp.com/api/cobject/v1/item", function( data ) {
		 $scope.items = data;
		 console.log($scope.items);
		});

    }

    $scope.getItems();

	var user = $stamplay.User().Model
	
	user.currentUser().then(function(){
		$scope.$apply(function(){
			$scope.user = user.instance;
		})
	},function(err){
		/*manage error*/
	})

	$scope.fbLogin = function(){
		user.login('facebook')
	}
	$scope.logout= function(){
		user.logout();
	}


    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
