// set up new AngularJS app and created new controller

angular.module('flapperNews', [])
.controller('MainCtrl', ['$scope',
function($scope) {
  $scope.test = 'Hello world!';
}]);
