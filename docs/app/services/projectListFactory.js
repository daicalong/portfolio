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

            const getProjectList = category => {
                if (!category) return _projectList;
                // let result = [];
                // for(let i=0;i<_projectList.length;i++) {
                //     if(_projectList[i].category === category) result.push(_projectList[i]);
                // }
                // return $q.when(result);
                return _projectList.filter(element => element.category === category);
            };

            const getProjectListByCategoryAndTags = (category, tags) => {
                if (!category && !tags) return _projectList;
                let result = _projectList.filter(element => element.category.toLowerCase() === category.toLowerCase() && element.tags.some(t => tags.includes(t)));
                return $q.when(restult);
            };

            const getHighlightList = isStarred => {
                return $q.when(_projectList.filter(project => project.starred === isStarred));
            };

            const getProjectById = projectName => {
                return _projectList.find(project => project.name == projectName);
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
                getProjectList: getProjectList,
                getHighlightList: getHighlightList,
                getProjectListByCategoryAndTags: getProjectListByCategoryAndTags,
                getProjectById: getProjectById,
                getTagList: getTagList,
                getCategoryList: getCategoryList
            };
        }
    ]);
})(window.app);