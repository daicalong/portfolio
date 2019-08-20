(function () {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            let projectGallery = projectGalleryValue;
            let projectList = [
                {
                    id: 0,
                    name: 'Marketplace One',
                    date: '2017-01-01T05:00:00.000Z',
                    category: 'UX',
                    tags: ['web design, ux, ui'],
                    imgUrl: '/assets/images/gallery/andrej-lisakov-679177-unsplash.jpg'
                }
            ];

            const getProjectList = () => {
                return projectList;
            };

            return {
                getProjectList: getProjectList
            };
        }

    ]);
})();