(function() {

  var westerosCtrl = function($scope, westerosFactory) {
    $scope.families = westerosFactory.getFamilies();
  };

  westerosCtrl.$inject = ['$scope', 'westerosFactory'];

  angular.module('app').controller('westerosCtrl', westerosCtrl);

}());