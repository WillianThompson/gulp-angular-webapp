'use strict';

/**
 * @ngdoc overview
 * @name MyWebApp
 * @description
 * # MyWebApp
 *
 * Main module of the application.所有模块的入口。
 * 每个模块有很多子模块。只要引用最上级的模块即可。
 */
var webApp = angular
  .module('MyWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'oc.lazyLoad',

    'interceptor',
    'appControllers',
    'appServices',
    'appRoutes',
    'appDirective',
    'appFilter'
  ]);

webApp.config(['$locationProvider', '$httpProvider',
  function ($locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  }]);

//angular中两种写法。里面function(){}可以没有['引用的模块']
//webApp.config(
// function ($locationProvider, $httpProvider) {
//  $httpProvider.interceptors.push('httpInterceptor');
//});
