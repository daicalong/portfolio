'use strict';
(function (ng, window, doc, module) {

  var dependencies = ['ui.router', 'angular-loading-bar', 'ngAnimate'];

  window.app = ng.module(module, dependencies);

  function bootstrap() {
    ng.element(doc).ready(function () {
      ng.bootstrap(doc, [module], { strictDi: true });
    });
  }

  bootstrap();
})(window.angular, window, window.document, 'hatomi'); //jshint ignore:line

(function (app) {
  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    class stateObj {
      constructor(name, url, component, redirectTo) {
        this.name = name;
        this.url = url;
        this.component = component || null;
        this.redirectTo = redirectTo || null;
      }
    }

    $stateProvider.state(new stateObj('Nav', '', 'navigation', 'Nav.Home'));
    $stateProvider.state(new stateObj('Nav.Home', '/Home', 'home', false));
    $stateProvider.state(new stateObj('Nav.Projects', '/Projects', 'projects', 'Projects.UX'));
    $stateProvider.state(new stateObj('Nav.Projects.UX', '/UX', 'ux', false));
    $stateProvider.state(new stateObj('Nav.Projects.Details', 'Details/{projectName}', 'projectDetails', false));
    $stateProvider.state(new stateObj('Nav.Projects.Illustration', '/Illustration', 'illustration', false));
    $stateProvider.state(new stateObj('Nav.Projects.Other', '/Other', 'otherWorks', false));
    $stateProvider.state(new stateObj('Nav.WIP', '/WIP', 'wip', false));

    $urlRouterProvider.otherwise('/Home');
  }]);
})(window.app);
(function (app) {
  app.value('personalInfoValue',
    {
      siteName: 'Hatomi',
      phone: '+980-875-1007',
      email: 'hatomi.design@gmail.com',
      socialMedia: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hpnguyen52/'
        },
        {
          name: 'YouTube',
          url: 'https://www.youtube.com/user/HPNguyen52',
        },
        {
          name: 'Vimeo',
          url: 'https://vimeo.com/user16262642'
        }
      ]
    }
  );
})(window.app);
(function(app) {
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
          "img": "hatomi-thumb.jpg",
          "starred": true
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
          "img": "mp1-thumb.jpg",
          "starred": false
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
          "img": "force-crm-thumb.jpg",
          "starred": true
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
          "img": "marketing-tracker-thumb.jpg",
          "starred": false
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
          ],
          "starred": false
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
          "img": "fig-tech-summit-thumb.jpg",
          "starred": false
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
          "img": "fig-thumb.jpg",
          "starred": false
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
          "img": "fig-app-thumb.jpg",
          "starred": false
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
          "img": "maldives-web-thumb.jpg",
          "starred": false
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
          "img": "maldives-log-thumb.jpg",
          "starred": true
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
          "img": "superior-habits-thumb.jpg",
          "starred": true
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
          "img": "5ghost-thumb.jpg",
          "starred": false
        },
        {
          "id": 11,
          "name": "Zoolax, Inc.",
          "date": "20170301T000000-0700",
          "category": "graphic design",
          "tags": [
            "logo",
            "adobe illustrator"
          ],
          "img": "zoolax-thumb.jpg",
          "starred": true
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
          "img": "breeze-in-yoga-thumb.jpg",
          "starred": true
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
          "img": "asher-photography-thumb.jpg",
          "starred": false
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
          "img": "lazy-afternoon-thumb.jpg",
          "starred": true
        }
      ]
);
})(window.app);
(function (app) {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            const getProjectList = (category) => {
                return projectGalleryValue.filter(element => element.category === category);
            };

            const getHighlightList = (isStarred) => {
                return projectGalleryValue.filter(element => element.starred === isStarred);
            };

            const getProjectById = (projectName) => {  
                return projectGalleryValue.find(project => project.name == projectName);
            }

                return {
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectById: getProjectById
            };
        }

    ]);
})(window.app);
(function(app) {
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
})(window.app);
(function (app, ng) {
    app.component("home",
        {
            templateUrl: '/app/states/home/home.template.html',
            controller: homeController
        });

    homeController.$inject = ['projectListFactory'];

    function homeController(projectListFactory) {
        let $ctrl = this;

        $ctrl.$onInit = () => {
            $ctrl.highlightProjectList = projectListFactory.getHighlightList(true);
        };
    }

    app.controller('homeController', homeController);

})(window.app, window.angular);


(function (app, ng) {
    app.component('illustration',
        {
            templateUrl: '/app/states/illustration/illustration.template.html',
            controller: illustrationController
        });

    app.controller('illustrationController', illustrationController);

    illustrationController.$inject = ['projectListFactory'];

    function illustrationController(projectListFactory) {
        let $ctrl = this;

    }
})(window.app, window.angular);

(function (app) {
  app.component("navigation",
    {
      templateUrl: '/app/states/nav/nav.template.html',
      controller: navController
    });

  navController.$inject = [];

  function navController() {
    var $ctrl = this;

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
        new navItem('Home', 'Nav.Home', 'fig-home', false),
        new navItem('UX', 'Nav.Projects.UX', 'fig-dashboard-variant-2', false),
        new navItem('Illustration', 'Nav.Projects.Illustration', 'fig-sketch', false),
        new navItem('Other', 'Nav.Projects.Other', 'fig-rocket', false),
        new navItem('Contact', 'Nav.Contact', 'fig-email', false)
      );
    }

    app.controller('navController', navController);
  }
})(window.app);
(function (app, ng) {
    app.component('otherWorks',
        {
            templateUrl: '/app/states/otherWorks/otherWorks.template.html',
            controller: otherWorksController
        });

    app.controller('otherWorksController', otherWorksController);

    otherWorksController.$inject = ['projectListFactory'];

    function otherWorksController(projectListFactory, projectGalleryValue, filterFilter) {
        let $ctrl = this;
    }
})(window.app, window.angular);

(function (app, ng) {


    app.component('projectDetails',
        {
            templateUrl: '/app/states/projectDetails/projectDetails.template.html',
            controller: projectDetailsController
        });

    app.controller('projectDetailsController', projectDetailsController);

    projectDetailsController.$inject = ['projectListFactory', '$stateParams'];

    function projectDetailsController(projectListFactory, $stateParams) {
        let $ctrl = this;
        
        $ctrl.$onInit = () => {
            $ctrl.project = projectListFactory.getProjectById($stateParams.projectName);
            console.log($ctrl.project);
        }
    }
})(window.app, window.angular);


(function (app, ng) {
    app.component("projects",
        {
            templateUrl: '/app/states/projects/projects.template.html',
            controller: projectsController
        });

    app.controller('projectsController', projectsController);

    projectsController.$inject = ['projectListFactory'];

    function projectsController() {
        var $ctrl = this;

    }
})(window.app, window.angular);

(function (app, ng) {
    app.component("ux",
        {
            templateUrl: '/app/states/ux/ux.template.html',
            controller: uxController
        });

    app.controller('uxController', uxController);

    uxController.$inject = ['projectListFactory'];

    function uxController(projectListFactory) {
        let $ctrl = this;

        const _getDate = () => {
            return new Date();
        }

        $ctrl.$onInit = () => {
            $ctrl.uxGallery = projectListFactory.getProjectList('web design');
        };
    }
})(window.app, window.angular);

app.component("wip",
    {
        templateUrl: '/app/states/wip/wip.template.html',
        controller: wipController
    });

function wipController(wpFactory) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
        // wpFactory.getPosts(1).then((response) => {
        //     $ctrl.posts = response;

        //     response.forEach((el) => {
        //         console.log(el);
        //     });
        // });
    };
}

app.controller('wipController', wipController);
(function (app, ng) {
    app.component("footer",
        {
            templateUrl: '/app/components/footer/footer.comp.template.html',
            controller: footerController
        });

    footerController.$inject = ['personalInfoValue'];

    function footerController(personalInfoValue) {
        let $ctrl = this;

        $ctrl.$onInit = () => {
            $ctrl.info = personalInfoValue;
        };
    }

    app.controller('footerController', footerController);

})(window.app, window.angular);


//# sourceMappingURL=app.js.map