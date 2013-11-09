var app = angular.module('fetcher', []);

app.controller('homePageCtrl', ['$scope', '$http', '$sce', function homePageCtrl($scope, $http, $sce) {
  $scope.isLoading;           // state of application
  $scope.started;             // state that user clicked on 'start'
  $scope.websites_list = [];  // list of websites
  $scope.website;             // index of selected's website
  $scope.url;                 // url of the website

  $scope.init = function() {
    $scope.started = false
    $scope.isLoading = true;
    $http.get('/website').success(function(websites) {
      $scope.websites_list = angular.copy(websites);
      console.log(JSON.stringify($scope.websites_list))
      $scope.isLoading = false;
    });
  };

  $scope.next = function() {
    index = $scope.websites_list.indexOf($scope.website);
    ++index
    index %= $scope.websites_list.length
    $scope.website = $scope.websites_list[index];
    $scope.url = $sce.trustAsResourceUrl($scope.website.url);
    console.log($scope.website.url)
  }

  $scope.start = function() {
    $scope.started = true;
    $scope.next();
  };

}]);

app.controller('adminPageCtrl', ['$scope', function adminPageCtrl($scope) {

}]);
