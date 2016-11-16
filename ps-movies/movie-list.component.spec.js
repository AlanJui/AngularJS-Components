'use strict';

describe('The movieList component', function () {

  beforeEach(module('psMovies'));

  var movieList;

  beforeEach(inject(function ($componentController) {
    movieList = $componentController('movieList', {
      $scope: {}
    });
  }));

  it('can be created', function () {
    expect(movieList).toBeDefined();
    expect(movieList.$onInit).toBeDefined();
  });

});