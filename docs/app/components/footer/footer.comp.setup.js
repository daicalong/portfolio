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

