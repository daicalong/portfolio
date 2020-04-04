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

        $ctrl.filterByTags = (tag) => {
            // $ctrl.selectedTags = $ctrl.selectedTags.indexOf(tag) === -1 ? $ctrl.selectedTags.push(tag) : $ctrl.selectedTags.splice($ctrl.selectedTags.indexOf(tag), 1);
            if ($ctrl.selectedTags.indexOf(tag) === -1) $ctrl.selectedTags.push(tag);
            else $ctrl.selectedTags.splice($ctrl.selectedTags.indexOf(tag), 1);
            $ctrl.projectList = projectListFactory.getProjectListByTags($ctrl.selectedTags);
        };

        $ctrl.filterByCategory = (_selectedCategory) => {
            $ctrl.selectedCategory = _selectedCategory ? ($ctrl.selectedCategory === _selectedCategory ? undefined : _selectedCategory) : undefined;
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectListByCategory($ctrl.selectedCategory) : projectListFactory.getProjectListByCategory();
            if (!$ctrl.selectedCategory) return $cookies.remove('userSelection');
            return $cookies.put('userSelection', _selectedCategory);
        };

        $ctrl.$onInit = () => {
            $ctrl.selectedCategory = $cookies.get('userSelection');
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectListByCategory($ctrl.selectedCategory) : projectListFactory.getProjectListByCategory();
        };
    }
})(window.app, window.angular);