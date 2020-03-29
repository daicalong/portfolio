(function(app, ng) {
    app.component("wip", {
        templateUrl: '/app/states/wip/wip.template.html',
        controller: wipController
    });
    app.controller('wipController', wipController);
    wipController.$inject = ['projectListFactory'];

    function wipController(wpFactory) {
        var $ctrl = this;

        $ctrl.$onInit = () => {

        };
    }


})(window.app, window.angular);