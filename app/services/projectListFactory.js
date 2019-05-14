app.factory("projectListFactory", ['projectGalleryValue', function projectListFactory(projectGalleryValue) {
    
    function getProjectGallery() {
       return projectGalleryValue;
    }

    let projectGallery = getProjectGallery();

    let projectList = [
        {
            name: 'Marketplace One',
            date: '',
            category: projectGallery.ux.category,
            tags: ['Web Design', 'UX', 'UI'],
            imgUrl: projectGallery.ux.imgList[0],
            descriptions:
                [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia massa a tortor tempor sagittis. Aenean iaculis eros non feugiat accumsan. Nulla consequat elit id enim finibus dapibus.',
                    'Sed eget tellus facilisis, eleifend ex at, gravida nulla. Quisque convallis dignissim mi ac pretium. Suspendisse et mi quis sapien porta eleifend. Nulla porta nibh sed tellus aliquet, nec dignissim tortor ultrices.'
                ]
        }
    ];

    return projectList;
}

]);