'use strict';

var appController = angular.module('appController', []);

appController.controller('applicationCtrl', function ($scope) {
  /**-------------------------------------初始化----------------------------------**/
  $scope.appResult = '全局控制器测试成功';
  /**-----------------------------------初始化end---------------------------------**/
});

appController.controller('ctrl404', function ($scope) {

});

var commonController = angular.module('commonController', []);


