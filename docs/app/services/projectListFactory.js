(function(app) {
    app.factory("projectListFactory", ['projectListValue',
        function projectListFactory(projectListValue) {

            const getProjectList = (category) => {
                if (category) return projectListValue.filter(element => element.category === category);
                return projectListValue;
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