(function(){
    app.component("ux",
    {
        templateUrl: '/wwwroot/app/states/ux/ux.template.html',
        controller: uxController
    });

function uxController(projectListFactory) {
    let $ctrl = this;

    const _getDate = () => {
        return new Date();
    }

    $ctrl.$onInit = () => {
        $ctrl.uxGallery = projectListFactory.getProjectList('ux');
    }; 

}

app.controller('uxController', uxController);
})();
