'use strict ';

var commonService = angular.module('commonService', []);

commonService.factory('loginFactory', function (appFactory, $http, $resource) {
  var apiURL = appFactory.getAPIUrl().url;
  var service = {
    /**
     * 登录验证
     * @param params={userName:'',password:''}
     */
    authUser: function (params, obj) {
      var url = apiURL + '/login';
      return $resource(url, params, obj);
    }
  }
  return service;

});
