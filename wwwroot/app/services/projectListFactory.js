
(function () {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            function serviceMethod() {
                return $timeout(function () {
                    return {
                        property: 'value'
                    };
                }, 1000);
            }


            const getProjectList = (category) => {
                return projectGalleryValue.filter(element => element.category === category);
            };

            return {
                getProjectList: getProjectList
            };
        }

    ]);
})();