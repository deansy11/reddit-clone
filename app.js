// set up new AngularJS app and created new controller

angular.module('flapperNews', [])
.factory('posts', [function(){
  // created a new object with array property ('posts'). The variable is returned so that 'o' object is exposed to any Angular module that injects it
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', ['$scope', 'posts',
// scope variable is a bridge between controllers and templates - bind functions or variables you want available in template to $scope
function($scope, posts) {
  $scope.test = 'Hello world!';
  // creating a new variable that defines a list of post titles
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];
  // function that will add object into posts array
  $scope.addPost = function() {
    // prevents users from submitting blank post
    if(!$scope.title || $scope.title === '') {
      return;
    }
    // added posts now get title from $scope.title
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
  };
  // function enabling upvote
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);
