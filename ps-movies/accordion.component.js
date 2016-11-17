(function () {
  /* jshint validthis: true */
  'use strict';

  function accordionCtrl() {
    var vm = this;
    var panels = [];

    vm.addPanel = function (panel) {
      panels.push(panel);
      if (panels.length > 0) {
        panels[0].turnOn();
      }
    };

    vm.selectPanel = function (panel) {
      for (var i in panels) {
        if (panel === panels[i]) {
          panels[i].turnOn();
        } else {
          panels[i].turnOff();
        }
      }
    };
  }

  function accordionPanelCtrl() {
    var vm = this;
    vm.selected = false;

    vm.$onInit = function () {
      vm.parent.addPanel(vm);
    };

    vm.turnOn = function () {
      vm.selected = true;
    };

    vm.turnOff = function () {
      vm.selected = false;
    };

    vm.select = function () {
      vm.parent.selectPanel(vm);
    };
  }

  var module = angular.module('psMovies');

  module.component('accordion', {
    transclude: true,
    template: '<div class="panel-group" ng-transclude></div>',
    controller: accordionCtrl
  });

  module.component('accordionPanel', {
    bindings: {
      heading: '@'
    },
    require: {
      parent: '^accordion'
    },
    controllerAs: 'vm',
    controller: accordionPanelCtrl,
    transclude: true,
    template: '<div class="panel panel-default"' +
                '<div class="panel-heading" ng-click="vm.select()"> ' +
                  '<h4 class="panel-title">{{vm.heading}}</h4> ' +
                '</div>' +
                '<div ng-if="vm.selected" class="panel-body" ng-transclude> ' +
                '</div>' +
              '</div>'
  });

}());
