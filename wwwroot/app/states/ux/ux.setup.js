app.component("ux",
    {
        templateUrl: '/app/states/ux/ux.template.html',
        controller: uxController
    });

function uxController(projectListFactory, projectGalleryValue, filterFilter) {
    let $ctrl = this;

    const _getDate = () => {
        return new Date();
    }

    $ctrl.$onInit = () => {
        $ctrl.uxGallery = projectGalleryValue.ux;
        $ctrl.projectList = filterFilter(projectListFactory, {category: 'UI/UX'});   
    }

}

app.controller('uxController', uxController);
