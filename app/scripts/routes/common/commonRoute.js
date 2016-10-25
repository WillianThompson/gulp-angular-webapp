'use strict';

var commonRoute = angular.module('commonRoute', [])

commonRoute.config(function ($stateProvider) {
  $stateProvider
    .state('common-index', {
      url: '/index',
      controller: 'commonIndexCtrl',
      templateUrl: 'views/common/index.html',
      resolve: {
        deps: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            [
              'styles/common/login.css',
              'scripts/controllers/common/indexController.js'
            ]);
        }
      }
    })

    .state('common-login', {
      url: '/login',
      controller: 'commonLoginCtrl',
      templateUrl: 'views/common/login.html',
      resolve: {
        deps: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            [
              'styles/common/login.css',
              'scripts/controllers/common/loginController.js'
            ]);
        }
      }
    })

})
