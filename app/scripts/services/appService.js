'use strict';

/**
 * 通用service
 * @type {*|String}
 */

var appService = angular.module('appService', []);

appService.factory('appFactory',
  function () {

    var service = {

      /**
       * 获得开发项目后台的基本请求接口，可配置多个
       *
       * 请换成你的后台接口。
       * @returns {{url: string, project: string}}
       */
      getAPIUrl: function () {
        return {
          'url': 'http://192.168.0.191:8080/myserver/api'
        }
      }
    };

    return service;
  }
);
