(function (app) {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            const getProjectList = (category) => {
                return projectGalleryValue.filter(element => element.category === category);
            };

            const getHighlightList = (isStarred) => {
                return projectGalleryValue.filter(element => element.starred === isStarred);
            };

            const getProjectById = (projectId) => {
                return projectGalleryValue.find(project => project.id = projectId)
            }

            return {
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectById: getProjectById
            };
        }

    ]);
})(window.app);