(function (app) {
  app.component("app",
    {
      templateUrl: '/app/states/app/app.template.html',
      controller: appController
    });

  appController.$inject = [];

  function appController() {
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

    app.controller('appController', appController);
  }
})(window.app);