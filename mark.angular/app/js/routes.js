define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/view1');
			$stateProvider
			.state('view1', {
				url: '/view1',
				templateUrl: 'app/partials/partial1.html',
				controller: 'MyCtrl1'
			})
			.state('view2', {
				url: '/view2',
				templateUrl: 'app/partials/partial2.html',
				controller: 'MyCtrl2'
			})
			.state('view3', {
				url: '/view3',
				templateUrl: 'app/partials/partial3.html',
				controller: 'MyCtrl3'
			});
		}]);
});
