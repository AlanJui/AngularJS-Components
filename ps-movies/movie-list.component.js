(function () {
  'use strict';

  function movieListCtrl($http, Thing) {
    var vm = this;
    vm.movies = [];

    function fetchMovie($http) {
      return $http.get('/db/movies.json')
        .then(function (response) {
          return response.data;
          });
    }

    function fetchThings($http) {
      var API_URL = 'http://192.168.66.10:3000/api/things';
      return $http.get(API_URL)
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

    vm.goTo = function (movieID) {
      vm.$router.navigate([ 'Details', { id: movieID }, 'Overview' ]);
    };

    vm.$onInit = function () {
      fetchMovie($http).then(function (movies) {
        vm.movies = movies;
      });

      vm.things = Thing.query(function () {
        console.log(vm.things);
      });
    };

  }

  var module = angular.module('psMovies');

  module.component('movieList', {
    templateUrl: '/ps-movies/movie-list.component.html',
    bindings: {
      $router: '<'
    },
    controllerAs: 'vm',
    controller: ['$http', 'Thing', movieListCtrl]
  });
}());
