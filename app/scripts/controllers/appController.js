'use strict';

var appController = angular.module('appController', []);

appController.controller('applicationCtrl', function ($scope) {
  /**-------------------------------------初始化----------------------------------**/
  console.log('经过了全局控制器');
  /**-----------------------------------初始化end---------------------------------**/
});

appController.controller('ctrl404', function ($scope) {

});

var commonController = angular.module('commonController', []);


