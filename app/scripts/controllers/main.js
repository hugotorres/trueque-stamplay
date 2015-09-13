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
