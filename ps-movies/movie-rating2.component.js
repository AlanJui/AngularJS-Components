(function () {
  'use strict';

  function movieRating2Ctrl() {
    /* jshint validthis: true */
    var vm = this;

    function drawStars(value, max) {
      var stars = [];

      for (var i = 1; i <= max; i++) {
        var shape = (i <= value) ? 'glyphicon-star' : 'glyphicon-star-empty';
        stars.push(shape);
      }

      return stars;
    }

    vm.$onInit = function () {
      vm.stars = drawStars(vm.ratingValue, vm.maxValue);
    };

    vm.$onChanges = function () {
      vm.stars = drawStars(vm.ratingValue, vm.maxValue);
    };

  }

  var module = angular.module('psMovies');

  module.component('movieRating2', {
    templateUrl: '/ps-movies/movie-rating2.component.html',
    bindings: {
      ratingValue: '<',
      maxValue: '<',
      setRating: '&'
    },
    controllerAs: 'vm',
    controller: movieRating2Ctrl
  });
}());
