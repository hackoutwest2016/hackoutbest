app.factory('DataService', function($http) {
	console.log('DataService');
	var service;

	var base_url = "http://localhost:8000/"

	service.get = function(path, params) {
		return $http({
			method: 'GET',
			url: base_url + path,
			params: params
		});
	}

	service.post = function(path, data) {
		return $http({
			method: 'GET',
			url: base_url + path,
			data: data
		});	
	}

	service.getMe = function() {
		return service.get('me');
	}

	service.getFeed = function() {
		return service.get('me/feed');
	}

	service.getUser = function(id) {
		return service.get('user/' + id);
	}

	service.getUsers = function() {
		return service.get('users');
	}

	service.getConcerts = function() {
		return service.get('concerts');
	}

	service.addConcert = function(data) {
		return service.post('me/concerts', data)
	}

	service.addFriend = function(data) {
		return service.post('me/friends', data)
	}

	return service;
});