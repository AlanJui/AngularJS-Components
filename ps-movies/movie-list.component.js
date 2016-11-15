(function () {
  'use strict';

  function movieList() {
    var model = this;

    model.message = 'Hello from Component Message';

    model.changeMsg = function () {
      model.message = 'New message';
    };
  }

  var module = angular.module('psMovies');

  module.component('movieList', {
    templateUrl: '/ps-movies/movie-list.component.html',
    controllerAs: 'model',
    controller: movieList
  });
}());
