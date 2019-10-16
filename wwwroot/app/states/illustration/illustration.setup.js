app.component('illustration',
    {
        templateUrl: '/app/states/illustration/illustration.template.html',
        controller: illustrationController
    });

function illustrationController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

}

app.controller('illustrationController', illustrationController);
