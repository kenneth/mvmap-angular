define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	//'angularRoute',
	'ui.router',
	'ui.bootstrap',
	], function (angular, filters, services, directives, controllers) {
		'use strict';

		return angular.module('myApp', [
			//'ngRoute',
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
			'myApp.directives',
			'ui.router',
			'ui.bootstrap',
		]);
});
