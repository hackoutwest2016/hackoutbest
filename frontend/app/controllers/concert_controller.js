app.controller('ConcertController', function($scope) {
  console.log('ConcertController');

  $scope.concert = {
  	user: {
  		name: "Axel"
  	},
  	artist: {
  		name: "M83"
  	},
  	venue: {
  		name: "Way out west"
  	},
  	description: "When ever I get sad I will think about when they played 'Midnight City' and be happy again. Magic!",
  	date: "2016.08.11",
  	image_url: "app/assets/M83.jpg",
  	rating: 5
  }
});
