app.component('otherWorks',
    {
        templateUrl: '/app/states/other-works/other-works.template.html',
        controller: otherWorksController
    });

function otherWorksController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('otherWorksController', otherWorksController);
