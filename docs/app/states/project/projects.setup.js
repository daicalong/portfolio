app.component("projects",
    {
        templateUrl: '/app/states/projects/project.template.html',
        controller: projectController
    });

function projectController() {
    var $ctrl = this;

}

app.controller('projectController', projectController);