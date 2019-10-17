app.component("works",
    {
        templateUrl: '/app/states/projects/projects.template.html',
        controller: projectsController
    });
    
function projectsController() {
    var $ctrl = this;

}

app.controller('projectsController', projectsController);