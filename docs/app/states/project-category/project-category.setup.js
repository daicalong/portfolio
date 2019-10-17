app.component("projectCategory",
    {
        templateUrl: '/app/states/project-category/project-category.template.html',
        controller: projectCategoryController
    });

function projectCategoryController() {
    var $ctrl = this;

}

app.controller('projectCategoryController', projectCategoryController);