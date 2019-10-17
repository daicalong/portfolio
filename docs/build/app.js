'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  class stateObj {
    constructor(name, url, component, redirectTo) {
      this.name = name;
      this.url = url;
      this.component = component || null;
      this.redirectTo = redirectTo || null;
    }
  }

  $stateProvider.state(new stateObj('Base', '', 'base', 'Base.WIP'));
  $stateProvider.state(new stateObj('Base.Home', '/Home', 'home', false));
  $stateProvider.state(new stateObj('Base.Works', '/Works', 'works', 'Base.Works.UX'));
  $stateProvider.state(new stateObj('Base.Works.UX', '/UX', 'ux', false));
  $stateProvider.state(new stateObj('Base.Works.Illustration', '/Illustration', 'illustration', false));
  $stateProvider.state(new stateObj('Base.Works.Other', '/Other', 'otherWorks', false));
  $stateProvider.state(new stateObj('Base.WIP', '/WIP', 'wip', false));

  $urlRouterProvider.otherwise('/WIP');
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
(function() {
    app.factory("wpFactory", ['$http', '$q',
        function wpFactory($http, $q) {
            var url = 'http://hpnguyen52.wordpress.com/wp-json/wp/v2';

            const getPosts = (number) => {
                return ($http.get(url + 'posts?per_page=' + number).then(_success, _error));
            };

            const getMediaDataForId = (id) => {
                return ($http.get(url + 'media/' + id).then(_success, _error));
            };

            const _success = (response) => {
                return response.data;
            };

            const _error = (response) => {
                if (!angular.isObject || !response.data.message)
                    return ($q.reject('An unknown error has occured.'));

                return ($q.reject(response.data.message));
            };

            return {
                getPosts: getPosts,
                getMediaDataForId: getMediaDataForId
            }

        }

    ]);
})();
app.component("base",
  {
    templateUrl: '/app/states/base/base.template.html',
    controller: baseController
  });


function baseController() {
  var $ctrl = this;
  $ctrl.person = { 'name': 'hatomi' };
  $ctrl.nav = [];

  $ctrl.toggleMenu = () => {
    $ctrl.menuIsOpen = !$ctrl.menuIsOpen;
  };

  class navItem {
    constructor(title, url, iconClass, hasSubnav) {
      this.title = title;
      this.url = url;
      this.iconClass = iconClass;
      this.hasSubnav = hasSubnav;
    }
  }

  $ctrl.$onInit = () => {
    $ctrl.nav.push(
      new navItem('Home', 'Base.Home', 'fig-home', false),
      new navItem('UX', 'Base.Works.UX', 'fig-dashboard-variant-2', false),
      new navItem('Illustration', 'Base.Works.Illustration', 'fig-sketch', false),
      new navItem('Other', 'Base.Works.Other', 'fig-rocket', false),
      new navItem('Contact', 'Base.Contact', 'fig-email', false)
    );
  }

}

app.controller('baseController', baseController);
app.component("home",
    {
        templateUrl: '/app/states/home/home.template.html',
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
        templateUrl: '/app/states/illustration/illustration.template.html',
        controller: illustrationController
    });

function illustrationController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('illustrationController', illustrationController);

app.component('otherWorks',
    {
        templateUrl: '/app/states/other-works/other-works.template.html',
        controller: otherWorksController
    });

function otherWorksController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('otherWorksController', otherWorksController);

(function(){
    app.component("ux",
    {
        templateUrl: '/app/states/ux/ux.template.html',
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

app.component("wip",
    {
        templateUrl: '/app/states/wip/wip.template.html',
        controller: wipController
    });

function wipController(wpFactory) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
        wpFactory.getPosts(1).then((response) => {
            $ctrl.posts = response;

            response.forEach((el) => {
                console.log(el);
            });
        });
    };
}

app.controller('wipController', wipController);
app.component("works",
    {
        templateUrl: '/app/states/works/works.template.html'
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