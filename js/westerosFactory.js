(function() {

  var westerosFactory = function() {
    var factory = {};

    factory.getFamilies = function(){
      return [{'name': 'Stark',     'crest' : 'img/got/stark.jpg'},
              {'name': 'Lennister', 'crest' : 'img/got/lennister.jpg'},
              {'name': 'Tyrell',    'crest' : 'img/got/tyrell.jpg'},
              {'name': 'Martell',   'crest' : 'img/got/martell.jpg'}];
    };

    return factory;
  };

  angular.module('app').factory('westerosFactory', westerosFactory);
}());