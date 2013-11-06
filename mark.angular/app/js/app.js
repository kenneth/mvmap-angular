define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'ui-router'
	], function (angular) {
		'use strict';
		return angular.module('myApp', [
			'myApp.controllers',
			'myApp.filters',
			'myApp.services',
			'myApp.directives',
			'ui.router'
		]);
});
