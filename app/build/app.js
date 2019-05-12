'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var baseState = {
    name: 'Base',
    url: '',
    component: 'base',
    redirectTo: 'Base.Home'
  }

  var homeState = {
    name: 'Base.Home',
    url: '/Home',
    component: 'home'
  }

  var worksState = {
    name: 'Base.Works',
    url: '/Works',
    redirectTo: 'Base.Works.UX'
  }

  var UXState = {
    name: 'Base.Works.UX',
    url: '/UX',
    component: 'ux'
  }
  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(UXState);
  $urlRouterProvider.otherwise('/Home');
}]);


app.component("base",
  {
    templateUrl: '/states/base/base.template.html',
    controller: baseController
  });


function baseController() {
    var $ctrl = this;
    $ctrl.person = { 'name': 'hatomi' };
  
    $ctrl.nav = [
      {
        title: 'Home',
        uiSref: 'Base.Home',
        hasSubnav: false,
        isHome: true
      },
      {
        title: 'UX',
        uiSref: 'Base.Works.UX',
        hasSubnav: false,
      },
      {
        title: 'Illustration',
        uiSref: 'Base.Works.Illustration',
        hasSubnav: false
      },
      {
        title: 'Other',
        uiSref: 'Base.Works.Other',
        hasSubnav: false
      },
      {
        title: 'Contact',
        uiSref: 'Base.Contact',
        hasSubnav: false
      }
    ];
  }

  app.controller('baseController', baseController);
app.component("home",
    {
        templateUrl: '/states/home/home.template.html',
        controller: homeController
    });

function homeController() {
    var $ctrl = this;
    $ctrl.person = { 'name': 'hatomi' };

    for (var a = [], i = 0; i < 40; ++i) a[i] = i;

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    $ctrl.array = shuffle(a);
}

app.controller('homeController', homeController);

app.component("ux",
    {
        templateUrl: '/states/ux/ux.template.html',
        controller: uxController
    });

function uxController() {
    let $ctrl = this;

    $ctrl.uxArray = [
        {'name': 'Work 1'},
        {'name': 'Work 2'},
    ]

}

app.controller('uxController', uxController);

app.component("works",
    {
        templateUrl: '/states/works/works.template.html'
    });
//# sourceMappingURL=app.js.map