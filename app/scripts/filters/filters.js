'use strict';

var appFilter = angular.module('appFilter', []);

appFilter.filter('', function () {
  return function (str) {
    if (str != null) {
      str += '测试filter成功';
    }
  }
});
