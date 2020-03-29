(function(app, ng) {
    app.component('otherWorks', {
        templateUrl: '/app/states/projects/otherWorks/otherWorks.template.html',
        controller: otherWorksController
    });

    app.controller('otherWorksController', otherWorksController);

    otherWorksController.$inject = ['projectListFactory'];

    function otherWorksController(projectListFactory, projectListValue, filterFilter) {
        let $ctrl = this;
    }
})(window.app, window.angular);