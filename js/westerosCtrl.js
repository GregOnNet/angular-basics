(function() {

  var westerosCtrl = function($scope, westerosFactory) {
    $scope.families = westerosFactory.getFamilies();

    $scope.$on('bindingFinished', function(scope, element, attrs){
      $('span[westeros-family]').draggable();
    })
  };

  westerosCtrl.$inject = ['$scope', 'westerosFactory'];

  angular.module('app').controller('westerosCtrl', westerosCtrl);

}());