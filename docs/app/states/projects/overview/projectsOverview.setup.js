(function (app, ng) {
    app.component("overview", {
        templateUrl: '/app/states/projects/overview/projectsOverview.template.html',
        controller: projectsOverviewController
    });

    app.controller('projectsOverviewController', projectsOverviewController);

    projectsOverviewController.$inject = ['projectListFactory', '$cookies'];

    function projectsOverviewController(projectListFactory, $cookies) {
        var $ctrl = this;

        ng.extend($ctrl, {
            categories: projectListFactory.getCategoryList(),
            tags: projectListFactory.getTagList(),
            selectedCategory: undefined,
            selectedTags: []
        });

        $ctrl.filterbyTags = (tag) => {
            if ($ctrl.selectedTags.indexOf(tag) === -1) $ctrl.selectedTags.push(tag);
            else $ctrl.selectedTags.splice($ctrl.selectedTags.indexOf(tag), 0, tag);
        };

        $ctrl.filterByCategory = (_selectedCategory) => {
            $ctrl.selectedCategory = _selectedCategory ? ($ctrl.selectedCategory === _selectedCategory ? undefined : _selectedCategory) : undefined;
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
            if (!$ctrl.selectedCategory) return $cookies.remove('userSelection');
            return $cookies.put('userSelection', _selectedCategory);
        };

        $ctrl.filterProjects = (_selectedCategory, _selectedTag) => {
            $ctrl.selectedCategory = _selectedCategory ? ($ctrl.selectedCategory === _selectedCategory ? undefined : _selectedCategory) : undefined;
            // $ctrl.selectedTags = _selectedTag ? $ctrl.selectedTags.push(_selectedTag) : 
        };

        $ctrl.$onInit = () => {
            $ctrl.selectedCategory = $cookies.get('userSelection');
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectList($ctrl.selectedCategory) : projectListFactory.getProjectList();
        };
    }
})(window.app, window.angular);