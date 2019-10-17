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
  $stateProvider.state(new stateObj('Base.Projects', '/Projects', 'projects', 'Base.Projects.UX'));
  $stateProvider.state(new stateObj('Base.Projects.UX', '/UX', 'ux', false));
  $stateProvider.state(new stateObj('Base.Projects.Illustration', '/Illustration', 'illustration', false));
  $stateProvider.state(new stateObj('Base.Projects.Other', '/Other', 'otherWorks', false));
  $stateProvider.state(new stateObj('Base.WIP', '/WIP', 'wip', false));

  $urlRouterProvider.otherwise('/WIP');
}]);



app.value('projectGalleryValue',
    [
        {
            "id": 0,
            "name": "Hatomi",
            "date": "20191101T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "javascript",
                "angularjs"
            ],
            "img": "hatomi-thumb.jpg"
        },
        {
            "id": 1,
            "name": "Marketplace One",
            "date": "20190401T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "website",
                "logo",
                "custom graphics",
                "angularjs"
            ],
            "img": "mp1-thumb.jpg"
        },
        {
            "id": 2,
            "name": "ForceCRM",
            "date": "20180301T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "website",
                "custom graphics",
                "angularjs"
            ],
            "img": "force-crm-thumb.jpg"
        },
        {
            "id": 3,
            "name": "Marketing Tracker",
            "date": "20190701T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "website",
                "custom graphics",
                "angularjs"
            ],
            "img": "marketing-tracker-thumb.jpg"
        },
        {
            "id": 4,
            "name": "Alphastar Corporate Website",
            "date": "20181001T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "custom graphics",
                "angularjs"
            ],
            "img": [
                "acm-thumb",
                "jpg"
            ]
        },
        {
            "name": "FIG Technology Summit Website",
            "date": "20190301T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "custom graphics",
                "angularjs",
                "tailwindcss"
            ],
            "img": "fig-tech-summit-thumb.jpg"
        },
        {
            "id": 5,
            "name": "FIG Marketing Corporate Website",
            "date": "20181101T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "website"
            ],
            "img": "fig-thumb.jpg"
        },
        {
            "id": 6,
            "name": "FIG Mobile App",
            "date": "2019701T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "mockup"
            ],
            "img": "fig-app-thumb.jpg"
        },
        {
            "id": 7,
            "name": "Maldives Spa and Nails",
            "date": "20171001T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "website"
            ],
            "img": "maldives-web-thumb.jpg"
        },
        {
            "id": 8,
            "name": "Maldives Spa and Nails",
            "date": "20161101T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "maldives-log-thumb.jpg"
        },
        {
            "id": 9,
            "name": "Superior Habits",
            "date": "20170120T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "superior-habits-thumb.jpg"
        },
        {
            "id": 10,
            "name": "5Ghost",
            "date": "20160801T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "5ghost-thumb.jpg"
        },
        {
            "id": 11,
            "name": [
                "Zoolax",
                "Inc."
            ],
            "date": "20170301T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "zoolax-thumb.jpg"
        },
        {
            "id": 12,
            "name": "Breeze In Yoga",
            "date": "20161101T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "breeze-in-yoga-thumb.jpg"
        },
        {
            "id": 13,
            "name": "Asher Photography",
            "date": "20160701T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "asher-photography-thumb.jpg"
        },
        {
            "id": 14,
            "name": "Lazy Afternoon",
            "date": "20140701T000000-0700",
            "category": "illustration",
            "tags": [
                "adobe photoshop",
                "illustration"
            ],
            "img": "lazy-afternoon-thumb.jpg"
        }
    ]
);
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
            var url = 'http://hpnguyen52.wordpress.com/wp-json/wp/v2/';

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

app.component("works",
    {
        templateUrl: '/app/states/projects/projects.template.html',
        controller: projectsController
    });
    
function projectsController() {
    var $ctrl = this;

}

app.controller('projectsController', projectsController);
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