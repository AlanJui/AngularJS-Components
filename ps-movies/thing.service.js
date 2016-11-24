(function () {
  'use strict';

  var module = angular.module('psMovies');

  module.factory('Thing', function ($resource) {
    var API_URL = 'http://192.168.66.10:3000/api/things/:id';

    return $resource(API_URL);

    // return $resource(API_URL, { id: '@_id' }, {
    //   update: {
    //     method: 'PUT'
    //   }
    // });
  });
}());
