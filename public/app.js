var app = angular.module('eCom', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './templates/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/admin', {
			templateUrl: './templates/adminTmpl.html',
			controller: 'adminCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
})