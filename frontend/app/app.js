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
			controller: 'ConcertsController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
);

app.run(['$rootScope', '$window', 'srvAuth',
  function($rootScope, $window, sAuth) {

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    FB.init({
      appId: '***************',
      channelUrl: 'app/channel.html',
      status: true,
      cookie: true,
      xfbml: true
    });

    sAuth.watchAuthenticationStatusChange();
  };

  (function(d){
    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}]);
