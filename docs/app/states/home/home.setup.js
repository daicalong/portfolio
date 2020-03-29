(function(app, ng) {
    app.component("home", {
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