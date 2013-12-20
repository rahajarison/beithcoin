var app = angular.module('fetcher', []);

app.controller('homePageCtrl', ['$scope', '$http', '$sce', function homePageCtrl($scope, $http, $sce) {
  $scope.isLoading;           // state of application
  $scope.started;             // state that user clicked on 'start'
  $scope.websites_list = [];  // list of websites
  $scope.website = -1;        // index of selected's website
  $scope.url;                 // url of the website

  $scope.init = function() {
    $scope.started = false
    $scope.isLoading = true;
    $http.get('/website').success(function(websites) {
      $scope.websites_list = angular.copy(websites);
      $scope.isLoading = false;
    });
  };

  $scope.next = function() {
    $scope.started = true;
    ++$scope.website;
    $scope.website %= $scope.websites_list.length;
    $scope.url = $sce.trustAsResourceUrl($scope.websites_list[$scope.website]);
  }

}]);

app.controller('adminPageCtrl', ['$scope', function adminPageCtrl($scope) {

}]);
