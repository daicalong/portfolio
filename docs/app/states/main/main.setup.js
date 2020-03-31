(function(app, ng) {
    app.component("main", {
        templateUrl: '/app/states/main/main.template.html',
        controller: mainController
    });

    mainController.$inject = ['$cookies'];

    function mainController($cookies) {
        let $ctrl = this;

        ng.extend($ctrl, {
            savedTheme: '',
            selectedTheme: '',
            themes: {
                light: 'bg-gray-lightest text-gray-darkest',
                dark: 'bg-gray-darkest text-white'
            },
            nav: []
        });

        $ctrl.toggleMenu = (nav) => {
            nav.isOpen = !nav.isOpen;
        };

        $ctrl.toggleTheme = () => {
            $ctrl.activeTheme = $ctrl.activeTheme === $ctrl.themes.dark ? $ctrl.themes.light : $ctrl.themes.dark;
            $cookies.put('userTheme', $ctrl.activeTheme);
        }

        class navItem {
            constructor(title, url, iconClass, hasSubnav) {
                this.title = title;
                this.url = url;
                this.iconClass = iconClass;
                this.hasSubnav = hasSubnav;
            }
        }

        $ctrl.$onInit = () => {
            $ctrl.savedTheme = $cookies.get('userTheme');
            $ctrl.activeTheme = $ctrl.savedTheme ? $ctrl.savedTheme : $ctrl.themes.dark;
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
})(window.app, window.angular);