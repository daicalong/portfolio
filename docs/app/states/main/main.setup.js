(function(app) {
    app.component("main", {
        templateUrl: '/app/states/main/main.template.html',
        controller: mainController
    });

    mainController.$inject = [];

    function mainController() {
        var $ctrl = this;

        $ctrl.nav = [];

        $ctrl.toggleMenu = (nav) => {
            nav.isOpen = !nav.isOpen;
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
            $ctrl.mainNav = {
                isOpen: false
            };
            $ctrl.nav.push(
                new navItem('Home', 'Main.Home', 'fig-home', false),
                new navItem('Portfolio', 'Main.Projects', 'fig-dashboard-variant-2', false),
                new navItem('Illustration', 'Main.Projects.Illustration', 'fig-sketch', false),
                new navItem('Other', 'Main.Projects.Other', 'fig-rocket', false),
                new navItem('Contact', 'Main.Contact', 'fig-email', false)
            );
        }

        app.controller('mainController', mainController);
    }
})(window.app);