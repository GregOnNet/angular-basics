(function(){

  var westerosFamily = function() {
    return {
      restrict : 'A',
      scope : {
        family : '=westerosFamily'
      },
      template: '<h4>{{ family.name | pluralize }}</h4>' +
                '<img ng-src="{{ family.crest }}" class="img-rounded">'
    };
  };

  angular.module('app').directive('westerosFamily', westerosFamily);

}());