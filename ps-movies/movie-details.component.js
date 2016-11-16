(function () {
  /* jshint validthis: true */
  'use strict';

  function movieDetailsCtrl() {
    var vm = this;

    vm.$routerOnActivate = function (next) {
      vm.id = next.params.id;
    };
  }

  var module = angular.module('psMovies');

  module.component('movieDetails', {
    templateUrl: '/ps-movies/movie-details.component.html',
    // $canActivate: function ($timeout) {
    //   return $timeout(function () {
    //     return true;
    //   }, 1000);
    // },
    controllerAs: 'vm',
    controller: movieDetailsCtrl
  });
}());

