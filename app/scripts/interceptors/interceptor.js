'use strict';

var interceptor = angular.module('interceptor', []);

/**
 * 详细信息请去：http://www.cnblogs.com/baizhanshi/p/5776729.html
 *
 * 该文件还配置了angular请求http时的参数配置，
 * angular请求的参数默认为JSON对象，ajax默认为JSON字符串，为了统一，所以
 * 对angular请求的参数在请求前做了处理，使它和ajax请求的参数是同类型。
 */
interceptor.factory('httpInterceptor', function ($q, $injector) {
  var httpInterceptor = {
    //拦截请求，可在里面开启进度条
    request: function (config) {
      //头信息处理
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

      //对angular请求的参数处理，过程不必深究，有兴趣就看下。
      config.transformRequest = [function (data) {

        var param = function (obj) {
          var query = '';
          var name, value, fullSubName, subName, subValue, innerObj, i;

          for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
              for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += param(innerObj) + '&';
              }
            } else if (value instanceof Object) {
              for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += param(innerObj) + '&';
              }
            } else if (value !== undefined && value !== null) {
              query += encodeURIComponent(name) + '='
                + encodeURIComponent(value) + '&';
            }
          }

          return query.length ? query.substr(0, query.length - 1)
            : query;
        };

        return angular.isObject(data)
        && String(data) !== '[object File]' ? param(data)
          : data;
      }];

      return config;
    },
    requestError: function (err) {
      return $q.reject(err);
    },
    //拦截服务器响应，开在里面关闭进度条。
    response: function (res) {
      return res;
    },
    responseError: function (err) {
      if (-1 === err.status) {
        // 远程服务器无响应
      } else if (500 === err.status) {
        // 可对报500错，进行处理
      } else if (501 === err.status) {
        // ...
      }
      return $q.reject(err);
    }

  };
  return httpInterceptor;
});
