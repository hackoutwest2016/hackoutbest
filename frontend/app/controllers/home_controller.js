app.controller('HomeController', function($scope, $rootScope) {
  console.log('HomeController');

  $scope.concerts = $rootScope.concerts;
});
