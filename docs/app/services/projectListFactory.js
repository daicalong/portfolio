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
                for (let i = 0; i < projectListConstant.list.length; i++) {
                    result.push(...projectListConstant.list[i].tags);
                }
                return $q.when([...new Set(result)]);
            }

            const getCategoryList = () => {
                let arr = projectListConstant.list;
                let seen = {};
                let result = [];
                let length = arr.length;
                var j = 0;
                for (var i = 0; i < len; i++) {
                    let item = {
                        name: arr[i],
                        icon: arr[i].category.includes('web design') ? 'fig-code-window' : arr[i].category.includes('illustration') ? 'fig-sketch' : 'fig-geometry'
                    };
                    if (seen[item] !== 1) {
                        seen[item] = 1;
                        out[j++] = item;
                    }
                }
                return out;
                //TODO: need icons
                projectListConstant.list.forEach(element => result.push({
                    name: element.category,
                    icon: element.category.includes('web design') ? 'fig-code-window' : element.category.includes('illustration') ? 'fig-sketch' : 'fig-geometry'
                }))
                return $q.when([...new Set(result)]);
            }

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