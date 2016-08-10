app.controller('ProfileController', function($scope, $rootScope) {

	$scope.user = {
		first_name: "Mona",
		surname: "Khoshoi",
		image_url: "app/assets/MockUpMona.jpg",
		concert_count: 534,
		friend_count: 234,
		concerts: []
	}
	$scope.user.concerts = $rootScope.myConcerts;

});
