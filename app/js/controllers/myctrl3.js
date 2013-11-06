define([], function() {
	return ['$scope', '$http', function($scope, $http) {

		$scope.welcomeMessage = 'hey this is myctrl2.js!';
		$scope.title = "hello";
		$http.get('../../../phones/phones.json').success(function(data) {
			$scope.phones = data;
		});

		$scope.$apply();
	}];
});