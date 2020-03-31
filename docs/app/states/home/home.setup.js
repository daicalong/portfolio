(function (app, ng) {
    app.component("home", {
        templateUrl: '/app/states/home/home.template.html',
        controller: homeController
    });

    homeController.$inject = ['projectListFactory'];

    function homeController(projectListFactory) {
        let $ctrl = this;

        $ctrl.$onInit = () => {
            projectListFactory.getHighlightList(true).then(res => $ctrl.highlightProjectList = res);
            projectListFactory.getTagList().then(res => console.log(res));
        };
    }

    app.controller('homeController', homeController);

})(window.app, window.angular);