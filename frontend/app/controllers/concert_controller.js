app.controller('ConcertController', function($scope, $rootScope, $routeParams) {
  console.log('ConcertController');

  $scope.id = $routeParams.id;
  $scope.user = $routeParams.user;
  if ($routeParams.user === 'me') {
    if ($scope.id < 0) {
      $scope.id = $rootScope.myConcerts.length-1;
    } else if ($scope.id >= $rootScope.myConcerts.length) {
      $scope.id = 0;
    }
    $scope.concert = $rootScope.myConcerts[$scope.id];
  } else {
    if ($scope.id < 0) {
      $scope.id = $rootScope.concerts.length-1;
    } else if ($scope.id >= $rootScope.concerts.length) {
      $scope.id = 0;
    }
    $scope.concert = $rootScope.concerts[$scope.id];
  }
});
