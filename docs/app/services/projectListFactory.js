(function (app) {
    app.factory("projectListFactory", ['projectListValue', 'projectListConstant', '$q',
        function projectListFactory(projectListValue, projectListConstant, $q) {

            const getProjectList = (category) => {
                if (!category) return projectListConstant.list;
                return projectListConstant.list.filter(element => element.category === category);
            };

            const getProjectListByCategoryAndTags = (category, tags) => {
                if (!category && !tags) return projectListConstant.list;
                return projectListConstant.list.filter(element => element.category.toLowerCase() === category.toLowerCase() && element.tags.some(t => tags.includes(t)));
            };

            const getHighlightList = (isStarred) => {
                return projectListValue.filter(element => element.starred === isStarred);
            };

            const getProjectById = (projectName) => {
                return projectListValue.find(project => project.name == projectName);
            }

            return {
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectById: getProjectById
            };
        }

    ]);
})(window.app);