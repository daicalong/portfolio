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

        $ctrl.filterByCategory = selectedCategory => {
            $ctrl.selectedCategory = selectedCategory ? ($ctrl.selectedCategory === selectedCategory ? undefined : selectedCategory) : undefined;
            $ctrl.projectList = projectListFactory.getProjectListByCategory($ctrl.selectedCategory);
            return $cookies.put('selectedCategory', $ctrl.selectedCategory);
        };

        $ctrl.filterByTags = selectedTag => {
            if ($ctrl.selectedTags.indexOf(selectedTag) === -1) $ctrl.selectedTags.push(selectedTag);
            else $ctrl.selectedTags.splice($ctrl.selectedTags.indexOf(selectedTag), 1);

            $ctrl.projectList = projectListFactory.getProjectListByCategoryAndTags($ctrl.selectedCategory, $ctrl.selectedTags);

            return $cookies.put('selectedTags', JSON.stringify($ctrl.selectedTags));
        }

        $ctrl.$onInit = () => {
            $ctrl.selectedCategory = $cookies.get('selectedCategory');
            $ctrl.selectedTags = JSON.parse($cookies.get('selectedTags'));
            $ctrl.projectList = $ctrl.selectedCategory ? projectListFactory.getProjectListByCategory($ctrl.selectedCategory) : projectListFactory.getProjectListByCategory();
        };
    }
})(window.app, window.angular);