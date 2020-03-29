(function(app) {
    app.factory("projectListFactory", ['projectListValue', '$q',
        function projectListFactory(projectListValue, $q) {

            const getProjectList = (category) => {
                if (!category) return projectListValue;
                return projectListValue.filter(element => element.category === category);
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