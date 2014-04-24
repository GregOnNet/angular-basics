(function() {

  var westerosCtrl = function($scope) {
    $scope.families = [{'name': 'Stark',     'crest' : 'img/got/stark.jpg'},
                       {'name': 'Lennister', 'crest' : 'img/got/lennister.jpg'},
                       {'name': 'Tyrell',    'crest' : 'img/got/tyrell.jpg'},
                       {'name': 'Martell',   'crest' : 'img/got/martell.jpg'}];
  };

  westerosCtrl.$inject = ['$scope'];

  angular.module('app').controller('westerosCtrl', westerosCtrl);

}());