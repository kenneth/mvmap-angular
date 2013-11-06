define(['angular', 'app'], function(angular, app) {
	'use strict';

	/*
	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
	*/
	
	

	return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/view1");

		$stateProvider
			.state('view1', {
				url: "/view1",
				templateUrl: "app/partials/partial1.html"
			})
			.state('view2', {
				url: "/view2",
				templateUrl: "app/partials/partial2.html",
			});
		}]);

});