(function () {
  /* jshint validthis: true */
  'use strict';

  function movieAppCtrl() {
    var vm = this;



  }

  var module = angular.module('psMovies');

  module.component('movieApp', {
    templateUrl: '/ps-movies/movie-app.component.html',
    $routeConfig: [
      {
        path: '/list',
        component: 'movieList',
        name: 'List'
      },
      {
        path: '/list2',
        component: 'movieList2',
        name: 'List2'
      },
      {
        path: '/detail/:id/...',
        component: 'movieDetails',
        name: 'Details'
      },
      {
        path: '/about',
        component: 'appAbout',
        name: 'About'
      },
      {
        path: '/**',
        redirectTo: ['List']
      }
    ],
    controllerAs: 'vm',
    controller: movieAppCtrl
  });
}());
