(function () {
  'use strict';

  function movieRatingCtrl() {
    /* jshint validthis: true */
    var vm = this;

    vm.$onInit = function () {
      vm.stars = new Array(vm.ratingValue);
    };

    vm.$onChanges = function () {
      vm.stars = new Array(vm.ratingValue);
    };

  }

  var module = angular.module('psMovies');

  module.component('movieRating', {
    templateUrl: '/ps-movies/movie-rating.component.html',
    bindings: {
      ratingValue: '<'
    },
    transclude: true,
    controllerAs: 'vm',
    controller: movieRatingCtrl
  });
}());
