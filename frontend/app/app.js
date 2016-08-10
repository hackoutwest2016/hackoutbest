var app = angular.module('bftp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	var templatesPath = "app/templates/";
	$routeProvider.
	    when('/', {
	      templateUrl: templatesPath + 'landing.html',
	      controller: 'LandingController'
	    }).
		when('/home',{
			templateUrl: templatesPath + 'home.html',
			controller: 'HomeController'
		}).
		when('/concert',{
			templateUrl: templatesPath + 'concert.html',
			controller: 'ConcertController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
);

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
});