(function() {

  angular.module('app').filter(
    'pluralize', function() { return function(input){
         return input + 's';
      };
    })
}());