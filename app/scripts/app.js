'use strict';

/**
 * @ngdoc overview
 * @name privilegeManagerApp
 * @description
 * # privilegeManagerApp
 *
 * Main module of the application.
 */
var privilegeManagerApp = angular
  .module('MyWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'oc.lazyLoad',

    'appControllers',
    'appServices',
    'appRoutes',
    'appDirective'
  ]);
