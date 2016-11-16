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
    $routeConfig: [
      {
        path: '/overview',
        component: 'movieOverview',
        name: 'Overview'
      },
      {
        path: '/cast',
        component: 'movieCast',
        name: 'Cast'
      },
      {
        path: '/director',
        component: 'movieDirector',
        name: 'Director'
      }
    ],
    // $canActivate: function ($timeout) {
    //   return $timeout(function () {
    //     return true;
    //   }, 1000);
    // },
    controllerAs: 'vm',
    controller: movieDetailsCtrl
  });

  module.component('movieOverview', {
    template: 'This is overview'
  });

  module.component('movieCast', {
    template: 'This is info about the cast'
  });

  module.component('movieDirector', {
    template: 'This is info about the director'
  });

}());

