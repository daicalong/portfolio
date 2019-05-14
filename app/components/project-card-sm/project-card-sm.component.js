app.component("projectCardSm",
    {
        templateUrl: '/components/project-card-sm/project-card-sm.component.html',
        controller: projectCardSmController,
        bindings: {
            project: '<'
        }
    });

function projectCardSmController() {
    let $ctrl = this;

}

app.controller('projectCardSmController', projectCardSmController);