'use strict';

var appDirective = angular.module('appDirective', []);

appDirective.directive('formValid', function () {
  return {
    retrict: 'A',
    link: function () {

      console.log('指令测试');

    }
  }
})
