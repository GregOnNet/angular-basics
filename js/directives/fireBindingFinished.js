(function(){

  var fireBindingFinished = function() {
    return function (scope, element, attrs) {
      if (scope.$last) setTimeout(function() {
        scope.$emit('bindingFinished', element, attrs);
      }, 1);
    };
  };

  angular.module('app').directive('fireBindingFinished', fireBindingFinished);

}());