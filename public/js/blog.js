angular.module('app', ['ngMaterial', 'ngAnimate'])
	.controller('test', ['$scope', function(scope) {
		console.log('############################################################');
		$scope.select= function(item) {
        $scope.selected = item; 
 		};

 		$scope.isActive = function(item) {
        return $scope.selected === item;
 		};
	}]);