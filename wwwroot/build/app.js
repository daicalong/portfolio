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

  var CardState = {
    name: 'Card',
    url: '',
    component: 'projectCardSm'
  }
  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(UXState);
  $stateProvider.state(CardState);
  $urlRouterProvider.otherwise('/Home');
}]);



app.value('projectGalleryValue', {
    ux: {
        category: 'UI/UX',
        tags: ['Web Design', 'UX', 'UI'],
        imgList: [
            '/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg',
            '/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg',
            '/assets/images/gallery/andrew-pons-6488-unsplash.jpg',
            '/assets/images/gallery/anne-lin-572127-unsplash.jpg',
            '/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg',
            '/assets/images/gallery/giorgio-tomassetti-762135-unsplash.jpg'
        ]
    },
    illustration: {
        category: 'UI/UX',
        tags: ['Web Design', 'UX', 'UI'],
        imgList: [
            '/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg',
            '/assets/images/gallery/andrej-lisakov-686125-unsplash.jpg',
            '/assets/images/gallery/andrew-pons-6488-unsplash.jpg',
            '/assets/images/gallery/anne-lin-572127-unsplash.jpg',
            '/assets/images/gallery/chinh-le-duc-201487-unsplash.jpg',
            '/assets/images/gallery/giorgio-tomassetti-762135-unsplash.jpg'
        ]
    }
});
app.factory("projectListFactory", ['projectGalleryValue', function projectListFactory(projectGalleryValue) {
    
    function getProjectGallery() {
       return projectGalleryValue;
    }

    let projectGallery = getProjectGallery();

    let projectList = [
        {
            name: 'Marketplace One',
            date: '',
            category: projectGallery.ux.category,
            tags: ['Web Design', 'UX', 'UI'],
            imgUrl: projectGallery.ux.imgList[0],
            descriptions:
                [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa a tortor tempor sagittis. Aenean iaculis eros non feugiat accumsan. Nulla consequat elit id enim finibus dapibus.',
                    'Sed eget tellus facilisis, eleifend ex at, gravida nulla. Quisque convallis dignissim mi ac pretium. Suspendisse et mi quis sapien porta eleifend. Nulla porta nibh sed tellus aliquet, nec dignissim tortor ultrices.'
                ]
        }
    ];

    return projectList;
}

]);
app.component("base",
  {
    templateUrl: '/app/states/base/base.template.html',
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

app.component("ux",
    {
        templateUrl: '/app/states/ux/ux.template.html',
        controller: uxController
    });

function uxController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

    const _getDate = () => {
        return new Date();
    }

    $ctrl.$onInit = () => {
        $ctrl.uxGallery = projectGalleryValue.ux;
        $ctrl.projectList = filterFilter(projectListFactory, {category: 'UI/UX'});   
    }

}

app.controller('uxController', uxController);

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