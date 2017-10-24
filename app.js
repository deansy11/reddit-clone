// set up new AngularJS app and created new controller

angular.module('flapperNews', [])
.controller('MainCtrl', ['$scope',
function($scope) {
  $scope.test = 'Hello world!';
  // creating a new variable that defines a list of post titles
  // scope variable is a bridge between controllers and templates - bind functions or variables you want available in template to $scope
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];
}]);
