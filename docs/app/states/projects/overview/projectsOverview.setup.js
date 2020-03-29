(function(app, ng) {
    app.component("overview", {
        templateUrl: '/app/states/projects/overview/projectsOverview.template.html',
        controller: projectsOverviewController
    });

    app.controller('projectsOverviewController', projectsOverviewController);

    projectsOverviewController.$inject = ['projectListFactory', '$cookies'];

    function projectsOverviewController(projectListFactory, $cookies) {
        var $ctrl = this;

        ng.extend($ctrl, {
            categories: [{
                    name: 'graphic design',
                    icon: 'fig-geometry',
                    tags: []
                },
                {
                    name: 'illustration',
                    icon: 'fig-sketch',
                    tags: []
                },
                {
                    name: 'web design',
                    icon: 'fig-code-window',
                    tags: []
                }
            ],
            selectedCategory: undefined
        });

        $ctrl.filterByCategory = (categoryName) => {
            $ctrl.selectedCategory = categoryName ? ($ctrl.selectedCategory === categoryName ? undefined : categoryName) : undefined;
            // $ctrl.selectedCategory = $ctrl.selectedCategory === categoryName ? undefined : categoryName;
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
            if (!$ctrl.selectedCategory) return $cookies.remove('userSelection');
            return $cookies.put('userSelection', categoryName);
        };

        $ctrl.$onInit = () => {
            $ctrl.selectedCategory = $cookies.get('userSelection');
            console.log($ctrl.selectedCategory);
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
        };
    }
})(window.app, window.angular);