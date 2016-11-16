(function () {
  'use strict';

  function movieListCtrl($http) {
    var vm = this;
    vm.movies = [];

    function fetchMovie($http) {
      return $http.get('/db/movies.json')
        .then(function (response) {
          return response.data;
          });
    }

    vm.upRating = function (movie) {
      if (movie.rating < 5) {
        movie.rating++;
      }
    };

    vm.downRating = function (movie) {
      if (movie.rating > 1) {
        movie.rating--;
      }
    };

    vm.$onInit = function () {
      fetchMovie($http).then(function (movies) {
        vm.movies = movies;
      });
    };

  }

  var module = angular.module('psMovies');

  module.component('movieList', {
    templateUrl: '/ps-movies/movie-list.component.html',
    controllerAs: 'vm',
    controller: ['$http', movieListCtrl]
  });
}());
