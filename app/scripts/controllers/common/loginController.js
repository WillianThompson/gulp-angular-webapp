'use strict';

var commonController = angular.module('commonController', []);

commonController.controller('commonLoginCtrl', function ($scope, $state, $timeout, loginFactory) {
  /**-------------------------------------初始化----------------------------------**/

  /**-----------------------------------初始化end---------------------------------**/


  /**------------------------------------页面监听---------------------------------**/
  $scope.login = function () {
    //如果存在，（初次进来，不进行文本框输入，ng-model是未定义的，除非在controller里初始化。
    if (angular.isDefined($scope.userName) && angular.isDefined($scope.password)) {
      var promise = loginFactory.authUser
      (
        {
          userName: $scope.userName, password: $scope.password
        },
        {
          auth: {method: 'POST'}
        });
      promise.auth(function (resp) {
        if (resp.code == 1) {
          alert('登录成功！3秒后将进入主页');
          $timeout(function () {
            $state.go('common-index');
          }, 3000);

        }
      }, function (error) {
        //请求错误，一般在拦截器里共同处理了，除非特别需求需要在这处理。
      });
    }
  };

  /**----------------------------------页面监听end--------------------------------**/
});


