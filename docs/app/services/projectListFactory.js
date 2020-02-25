(function (app) {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            const getProjectList = (category) => {
                return projectGalleryValue.filter(element => element.category === category);
            };

            const getHighlightList = (isStarred) => {
                return projectGalleryValue.filter(element => element.starred === isStarred);
            };

            const getProjectById = (projectName) => {  
                return projectGalleryValue.find(project => project.name == projectName);
            }

                return {
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectById: getProjectById
            };
        }

    ]);
})(window.app);