/*
Angular touch carousel with CSS GPU accel and slide buffering
http://github.com/revolunet/angular-carousel
*/

/*global angular, module, exports*/

// commonjs package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){
  module.exports = 'angular-carousel';
}

(function(angular) {
  'use strict';
  
  angular.module('angular-carousel', [
    'ngTouch',
    'angular-carousel.shifty'
  ]);
  
})(angular);
