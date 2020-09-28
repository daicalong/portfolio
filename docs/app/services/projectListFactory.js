(function (app) {
    app.factory("projectListFactory", ['projectListValue', 'projectListConstant', '$q', '$cookies',
        function projectListFactory(projectListValue, projectListConstant, $q, $cookies) {
            let cookies = {
                selectedCategory: undefined,
                selectedTags: []
            };

            const _projectList = projectListConstant.list;

            const getCookies = () => {
                return;
            };

            const getProjectListByCategory = category => {
                if (!category) return _projectList;
                return _projectList.filter(element => element.category === category);
            };

            const getProjectListByTags = tags => {
                if (!tags || !tags.length) return _projectList;
                return _projectList.filter(element => element.tags.some(t => tags.includes(t)));
            };

            const getProjectListByCategoryAndTags = (category, tags) => {
                let result = _projectList;
                if (!category && !tags) return result;
                if (!category && tags) return result.filter(element => element.tags.some(t => tags.includes(t)));
                else if (!tags && category) return result.filter(element => element.category === category);
                else return result.filter(element => (element.category.toLowerCase() === category.toLowerCase()) && element.tags.some(t => tags.includes(t)));
            };

            const getHighlightList = isStarred => {
                return $q.when(_projectList.filter(project => project.starred === isStarred));
            };

            const getProjectById = projectId => {
                return _projectList.find(project => parseInt(project.id) === parseInt(projectId));
            };

            const getTagList = () => {
                let result = [];
                for (let i = 0; i < _projectList.length; i++) {
                    result.push(..._projectList[i].tags);
                }
                return [...new Set(result)];
            };

            const getCategoryList = () => {
                return projectListConstant.categories;
            };

            return {
                getProjectListByCategory: getProjectListByCategory,
                getProjectListByTags: getProjectListByTags,
                getHighlightList: getHighlightList,
                getProjectListByCategoryAndTags: getProjectListByCategoryAndTags,
                getProjectById: getProjectById,
                getTagList: getTagList,
                getCategoryList: getCategoryList
            };
        }
    ]);
})(window.app);