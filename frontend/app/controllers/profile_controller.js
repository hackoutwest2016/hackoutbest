app.controller('ProfileController', function($scope) {
  
	$scope.user = {
		first_name: "Mona",
		surname: "Khoshoi",
		image_url: "app/assets/MockUpMona.jpg",
		concert_count: 534,
		friend_count: 234,
		concerts: [
			{
				name: "Chvrches",
				date: "2016.08.11",
				image_url: "/app/assets/Chevres.jpg",
				rating: 3,
				venue: {
					name: "Way out west"
				}
			},
			{
				name: "Chvrches",
				date: "2016.08.11",
				image_url: "/app/assets/Chevres.jpg",
				rating: 5,
				venue: {
					name: "Way out west"
				}
			}
		]
	}

});