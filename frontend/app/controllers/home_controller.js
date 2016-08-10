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
  	}
  ]

});