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