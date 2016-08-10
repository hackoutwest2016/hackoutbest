app.controller('HomeController', function($scope) {
  console.log('HomeController');

  $scope.concerts = [
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
  			first_name: "Robin",
  			surname: "Hellgren" 
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

});