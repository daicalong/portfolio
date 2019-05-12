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