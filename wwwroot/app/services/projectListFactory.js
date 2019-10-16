
(function () {
    app.factory("projectListFactory", ['projectGalleryValue',
        function projectListFactory(projectGalleryValue) {

            let projectList = [
                {
                    "id": 0,
                    "name": "Hatomi",
                    "date": "20191101T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ui",
                        "website",
                        "javascript",
                        "angularjs"
                    ]
                },
                {
                    "id": 1,
                    "name": "Marketplace One",
                    "date": "20190401T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "website",
                        "logo",
                        "custom graphics",
                        "angularjs"
                    ]
                },
                {
                    "id": 2,
                    "name": "ForceCRM",
                    "date": "20180301T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "website",
                        "custom graphics",
                        "angularjs"
                    ]
                },
                {
                    "id": 3,
                    "name": "Marketing Tracker",
                    "date": "20190701T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "website",
                        "custom graphics",
                        "angularjs"
                    ]
                },
                {
                    "id": 4,
                    "name": "Alphastar Corporate Website",
                    "date": "20181001T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ui",
                        "website",
                        "custom graphics",
                        "angularjs"
                    ]
                },
                {
                    "name": "FIG Technology Summit Website",
                    "date": "20190301T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ui",
                        "website",
                        "custom graphics",
                        "angularjs",
                        "tailwindcss"
                    ]
                },
                {
                    "id": 5,
                    "name": "FIG Marketing Corporate Website",
                    "date": "20181101T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "website"
                    ]
                },
                {
                    "id": 6,
                    "name": "FIG Mobile App",
                    "date": "2019701T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "mockup"
                    ]
                },
                {
                    "id": 7,
                    "name": "Maldives Spa and Nails",
                    "date": "20171001T000000-0700",
                    "category": "web design",
                    "tags": [
                        "ux",
                        "ui",
                        "website"
                    ]
                },
                {
                    "id": 8,
                    "name": "Maldives Spa and Nails",
                    "date": "20161101T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 9,
                    "name": "Superior Habits",
                    "date": "20170120T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 10,
                    "name": "5Ghost",
                    "date": "20160801T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 11,
                    "name": [
                        "Zoolax",
                        "Inc."
                    ],
                    "date": "20170301T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 12,
                    "name": "Breeze In Yoga",
                    "date": "20161101T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 13,
                    "name": "Asher Photography",
                    "date": "20160701T000000-0700",
                    "category": "graphic design",
                    "tags": [
                        "logo",
                        "adobe illustrator"
                    ]
                },
                {
                    "id": 14,
                    "name": "Lazy Afternoon",
                    "date": "20140701T000000-0700",
                    "category": "illustration",
                    "tags": ["adobe photoshop", "illustration"]
                }
            ];

            function serviceMethod() {
                return $timeout(function () {
                    return {
                        property: 'value'
                    };
                }, 1000);
            }


            const getProjectList = (category) => {
                return projectList.filter(element => element.category === category);
            };

            return {
                getProjectList: getProjectList,
                serviceMethod: serviceMethod
            };
        }

    ]);
})();