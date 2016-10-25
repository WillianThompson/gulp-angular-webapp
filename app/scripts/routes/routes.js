'use strict';

var appRoutes = angular.module('appRoutes',
  [
    'ngRoute',
    'ui.router',

    'commonRoute'
  ]);

appRoutes.config(
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('not-found', {
        url: '/not-found',
        templateUrl: '404.html',
        controller: 'ctrl404',
      });

    $urlRouterProvider
      .otherwise('/index');

  });

