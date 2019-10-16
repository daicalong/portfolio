'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  let baseState = {
    name: 'Base',
    url: '',
    component: 'base',
    redirectTo: 'Base.Home'
  }

  let homeState = {
    name: 'Base.Home',
    url: '/Home',
    component: 'home'
  }

  let worksState = {
    name: 'Base.Works',
    url: '/Works',
    redirectTo: 'Base.Works.UX'
  }

  let uXState = {
    name: 'Base.Works.UX',
    url: '/UX',
    component: 'ux'
  }

  let illustrationState = {
    name: 'Base.Works.Illustration',
    url: '/Illustration',
    component: 'illustration'
  }

  let otherWorksState = {
    name: 'Base.Works.Other',
    url: '/Other',
    component: 'otherWorks'
  }

  // var State = (name, component, url, redirect) => {
  //   this.name = name;
  //   this.component = component;
  //   this.url = url || '';
  //   this.redirect = redirect || null;
  // };

  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(uXState);
  $stateProvider.state(illustrationState);
  $stateProvider.state(otherWorksState);
  $urlRouterProvider.otherwise('/Home');
}]);



app.value('projectGalleryValue', [
    {
        "id": 1,
        "name": "UX1",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 2,
        "name": "UX2",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 3,
        "name": "UX3",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg"
    },
    {
        "id": 4,
        "name": "UX4",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/giorgio-tomassetti-762135-unsplash.jpg"
    },
    {
        "id": 5,
        "name": "UX5",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/anne-lin-572127-unsplash.jpg"
    },
    {
        "id": 6,
        "name": "UX6",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 7,
        "name": "UX7",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 8,
        "name": "UX8",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 9,
        "name": "UX9",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 10,
        "name": "UX10",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg"
    },
    {
        "id": 11,
        "name": "UX11",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 12,
        "name": "UX12",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 13,
        "name": "UX13",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg"
    },
    {
        "id": 14,
        "name": "UX14",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/giorgio-tomassetti-762135-unsplash.jpg"
    },
    {
        "id": 15,
        "name": "UX15",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/anne-lin-572127-unsplash.jpg"
    },
    {
        "id": 16,
        "name": "UX16",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 17,
        "name": "UX17",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 18,
        "name": "UX18",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg"
    },
    {
        "id": 19,
        "name": "UX19",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg"
    },
    {
        "id": 20,
        "name": "UX20",
        "date": "2017-01-01T05:00:00.000Z",
        "category": "ux",
        "tags": ["web design, ux, ui"],
        "url": "/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg"
    }
]);

(function () {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            function serviceMethod() {
                return $timeout(function () {
                    return {
                        property: 'value'
                    };
                }, 1000);
            }


            const getProjectList = (category) => {
                return projectGalleryValue.filter(element => element.category === category);
            };

            return {
                getProjectList: getProjectList
            };
        }

    ]);
})();
app.component("base",
  {
    templateUrl: '/wwwroot/app/states/base/base.template.html',
    controller: baseController
  });


function baseController() {
  var $ctrl = this;
  $ctrl.person = { 'name': 'hatomi' };
  $ctrl.nav = [];

  $ctrl.toggleMenu = () => {
    $ctrl.menuIsOpen = !$ctrl.menuIsOpen;
  };

  function navItem(title, uiSref, iconClass, hasSubnav) {
    this.title = title;
    this.uiSref = uiSref;
    this.iconClass = iconClass;
    this.hasSubnav = hasSubnav;
  }

  function myNav() {
    $ctrl.nav.push(
      new navItem('Home', 'Base.Home', 'fig-home', false),
      new navItem('UX', 'Base.Works.UX', 'fig-dashboard-variant-2', false),
      new navItem('Illustration', 'Base.Works.Illustration', 'fig-sketch', false),
      new navItem('Other', 'Base.Works.Other', 'fig-rocket', false),
      new navItem('Contact', 'Base.Contact', 'fig-email', false),
    )
  }

  $ctrl.$onInit = () => {
    myNav();
  }

}

app.controller('baseController', baseController);
app.component("home",
    {
        templateUrl: '/wwwroot/app/states/home/home.template.html',
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

app.component('illustration',
    {
        templateUrl: '/wwwroot/app/states/illustration/illustration.template.html',
        controller: illustrationController
    });

function illustrationController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('illustrationController', illustrationController);

app.component('otherWorks',
    {
        templateUrl: '/wwwroot/app/states/other-works/other-works.template.html',
        controller: otherWorksController
    });

function otherWorksController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('otherWorksController', otherWorksController);

(function(){
    app.component("ux",
    {
        templateUrl: '/wwwroot/app/states/ux/ux.template.html',
        controller: uxController
    });

function uxController(projectListFactory) {
    let $ctrl = this;

    const _getDate = () => {
        return new Date();
    }

    $ctrl.$onInit = () => {
        $ctrl.uxGallery = projectListFactory.getProjectList('ux');
    }; 

}

app.controller('uxController', uxController);
})();

app.component("works",
    {
        templateUrl: '/wwwroot/app/states/works/works.template.html'
    });
app.component("projectCardSm",
    {
        templateUrl: '/app/components/project-card-sm/project-card-sm.component.html',
        controller: projectCardSmController,
        bindings: {
            project: '<'
        }
    });

function projectCardSmController() {
    let $ctrl = this;

}

app.controller('projectCardSmController', projectCardSmController);
//# sourceMappingURL=app.js.map