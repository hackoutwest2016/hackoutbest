var app = angular.module('bftp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	var templatesPath = "app/templates/";
	$routeProvider.
		when('/',{
			templateUrl: templatesPath + 'home.html',
			controller: 'HomeController'
		}).
		when('/concerts',{
			templateUrl: templatesPath + 'concerts.html',
			controller: 'HomeController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
);
