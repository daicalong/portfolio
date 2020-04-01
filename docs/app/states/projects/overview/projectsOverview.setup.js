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
            tags: [],
            selectedCategory: undefined,
            selectedTags: []
        });

        $ctrl.filterbyTags = (tags) => {
            $ctrl.selectedTags.some(tag => $ctrl.tags.includes(tag))
            $ctrl.selectedTags.push(tags);
        };

        $ctrl.filterByCategory = (categoryName) => {
            $ctrl.selectedCategory = categoryName ? ($ctrl.selectedCategory === categoryName ? undefined : categoryName) : undefined;
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
            // if (!$ctrl.selectedCategory) return $cookies.remove('userSelection');
            // return $cookies.put('userSelection', categoryName);
        };

        $ctrl.$onInit = () => {
            projectListFactory.getTagList().then(res => {$ctrl.tags = res;});
            projectListFactory.getCategoryList().then(res => {$ctrl.categories = res;});
            $ctrl.selectedCategory = $cookies.get('userSelection');
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
        };
    }
})(window.app, window.angular);