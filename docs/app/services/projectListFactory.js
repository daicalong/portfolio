(function (app) {
    app.factory("projectListFactory", ['projectListValue', 'projectListConstant', '$q', '$cookies',
        function projectListFactory(projectListValue, projectListConstant, $q, $cookies) {
            let cookies = {
                selectedCategory: undefined,
                selectedTags: []
            };
            const getCookies = () => {
                return;
            };

            const getProjectList = category => {
                if (!category) return projectListConstant.list;
                $cookies.put();
                return $q.when(projectListConstant.list.filter(element => element.category === category));
            };

            const getProjectListByCategoryAndTags = (category, tags) => {
                let result = undefined;
                if (!category && !tags) result = projectListConstant.list;
                result = projectListConstant.list.filter(element => element.category.toLowerCase() === category.toLowerCase() && element.tags.some(t => tags.includes(t)));
                return $q.when(restult);
            };

            const getHighlightList = isStarred => {
                return $q.when(projectListConstant.list.filter(project => project.starred === isStarred));
            };

            const getProjectById = projectName => {
                return projectListConstant.list.find(project => project.name == projectName);
            }

            const getTagList = () => {
                let result = [];
                // TODO: not working
                return $q.when(projectListConstant.list.forEach(element => result.push(element.tags)));
            }

            const getCategoryList = () => {
                let result = [];
                return $q.when(projectListConstant.list.forEach(element => result.push(element.category)));
            }

            return {
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectListByCategoryAndTags: getProjectListByCategoryAndTags,
                getProjectById: getProjectById,
                getTagList: getTagList
            };
        }
    ]);
})(window.app);