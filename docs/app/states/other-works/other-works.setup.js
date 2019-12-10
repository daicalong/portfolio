(function (app, ng) {
    app.component('otherWorks',
        {
            templateUrl: '/app/states/other-works/other-works.template.html',
            controller: otherWorksController
        });

    app.controller('otherWorksController', otherWorksController);

    otherWorksController.$inject = ['projectListFactory'];

    function otherWorksController(projectListFactory, projectGalleryValue, filterFilter) {
        let $ctrl = this;
    }
})(window.app, window.angular);
