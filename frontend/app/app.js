var app = angular.module('bftp', ['ngRoute']);

app.run(function($rootScope) {
   $rootScope.concerts = [
  {
     date: "2016.08.11",
     image_url: "app/assets/M83.jpg",
     rating: 3,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "M83"
     },
     user: {
        first_name: "Axel",
        surname: "Samuelsson"
     }
  },
  {
     date: "2016.08.11",
     image_url: "app/assets/Jamie XX.jpg",
     rating: 5,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "Jamie XX"
     },
     user: {
        first_name: "Mona",
        surname: "Khoshoi"
     }
  },
  {
     date: "2016.08.11",
     image_url: "app/assets/M83.jpg",
     rating: 4,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "M83"
     },
     user: {
        first_name: "Sofie",
        surname: "Lindblom"
     }
  },
  {
     date: "2016.08.11",
     image_url: "app/assets/Icona Pop.jpg",
     rating: 1,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "Icona Pop"
     },
     user: {
        first_name: "Robin",
        surname: "Hellgren"
     }
  },
  {
     date: "2016.08.11",
     image_url: "app/assets/M83.jpg",
     rating: 2,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "M83"
     },
     user: {
        first_name: "Axel",
        surname: "Samuelsson"
     }
  },
  {
     date: "2016.08.11",
     image_url: "app/assets/Chevres.jpg",
     rating: 4,
     venue: {
        name: "Way out west"
     },
     artist: {
        name: "Chvrches"
     },
     user: {
        first_name: "Axel",
        surname: "Samuelsson"
     }
  }
 ]

 $rootScope.myConcerts = [
   {
     name: "Chvrches",
     date: "2016.08.11",
     image_url: "/app/assets/Chevres.jpg",
     rating: 3,
     venue: {
       name: "Way out west"
     },
     user: {
        first_name: "Mona",
        surname: "Khoshoi"
     }
   },
   {
     name: "Jamie XX",
     date: "2016.08.11",
     image_url: "/app/assets/Jamie XX.jpg",
     rating: 5,
     venue: {
       name: "Way out west"
     },
     user: {
        first_name: "Mona",
        surname: "Khoshoi"
     }
   }
 ]
})

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
		when('/addconcert',{
			templateUrl: templatesPath + 'addconcert.html',
			controller: 'AddConcertController'
		}).
		when('/concert/:user/:id',{
			templateUrl: templatesPath + 'concert.html',
			controller: 'ConcertController'
		}).
		when('/profile',{
			templateUrl: templatesPath + 'profile.html',
			controller: 'ProfileController'
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
