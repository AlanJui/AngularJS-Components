(function () {
  'use strict';

  function movieList2Ctrl($http) {
    var vm = this;
    vm.movies = [];

    function fetchMovie($http) {
      return $http.get('/db/movies.json')
        .then(function (response) {
          return response.data;
        });
    }

    vm.setRating = function (movie, rating) {
      movie.rating = rating;
    };

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

    vm.goTo = function (movieID) {
      vm.$router.navigate([ 'Details', { id: movieID }, 'Overview' ]);
    };

    vm.$onInit = function () {
      fetchMovie($http).then(function (movies) {
        vm.movies = movies;
      });
    };

  }

  var module = angular.module('psMovies');

  module.component('movieList2', {
    templateUrl: '/ps-movies/movie-list2.component.html',
    bindings: {
      $router: '<'
    },
    controllerAs: 'vm',
    controller: ['$http', movieList2Ctrl]
  });
}());
