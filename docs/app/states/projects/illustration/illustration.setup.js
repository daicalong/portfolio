(function(app, ng) {
    app.component('illustration', {
        templateUrl: '/app/states/projects/illustration/illustration.template.html',
        controller: illustrationController
    });

    app.controller('illustrationController', illustrationController);

    illustrationController.$inject = ['projectListFactory'];

    function illustrationController(projectListFactory) {
        let $ctrl = this;

    }
})(window.app, window.angular);