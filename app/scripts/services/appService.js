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
       * 获得该项目的基本请求接口
       * @returns {{url: string, project: string}}
       */
      getInterfaceUrl: function () {
        return {
          'url': 'http://192.168.0.130/my-server/api/'
        }
      }
    };

    return service;
  }
);
