(function (app) {
    app.constant('projectListConstant', {
        list: [{
            "id": 0,
            "name": "Hatomi",
            "date": "20191101T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "javascript",
                "angularjs"
            ],
            "img": "hatomi-thumb.png",
            "starred": true
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
                "graphic design",
                "angularjs"
            ],
            "img": "mp1-thumb.jpg",
            "starred": false
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
                "graphic design",
                "angularjs"
            ],
            "img": "force-crm-thumb.jpg",
            "starred": true
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
                "graphic design",
                "angularjs"
            ],
            "img": "marketing-tracker-thumb.jpg",
            "starred": false
        },
        {
            "id": 4,
            "name": "Alphastar Corporate Website",
            "date": "20181001T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "graphic design",
                "angularjs"
            ],
            "img": "acm-thumb.jpg",
            "starred": false
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
            ],
            "img": "fig-thumb.jpg",
            "starred": false
        },
        {
            "id": 6,
            "name": "FIG Mobile App",
            "date": "20190701T000000-0700",
            "category": "web design",
            "tags": [
                "ux",
                "ui",
                "mockup"
            ],
            "img": "fig-app-thumb.jpg",
            "starred": false
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
            ],
            "img": "maldives-web-thumb.jpg",
            "starred": false
        },
        {
            "id": 8,
            "name": "Maldives Spa and Nails",
            "date": "20161101T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "maldives-logo-thumb.jpg",
            "starred": true
        },
        {
            "id": 9,
            "name": "Superior Habits",
            "date": "20170120T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "superior-habits-thumb.jpg",
            "starred": true
        },
        {
            "id": 10,
            "name": "5Ghost",
            "date": "20160801T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "5ghost-thumb.jpg",
            "starred": false
        },
        {
            "id": 11,
            "name": "Zoolax, Inc.",
            "date": "20170301T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "zoolax-thumb.jpg",
            "starred": true
        },
        {
            "id": 12,
            "name": "Breeze In Yoga",
            "date": "20161101T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "breeze-in-yoga-thumb.jpg",
            "starred": true
        },
        {
            "id": 13,
            "name": "Asher Photography",
            "date": "20160701T000000-0700",
            "category": "graphic design",
            "tags": [
                "logo",
                "adobe illustrator"
            ],
            "img": "asher-photography-thumb.jpg",
            "starred": false
        },
        {
            "id": 14,
            "name": "Lazy Afternoon",
            "date": "20140701T000000-0700",
            "category": "illustration",
            "tags": [
                "adobe photoshop",
                "illustration"
            ],
            "img": "lazy-afternoon-thumb.jpg",
            "starred": true
        },
        {
            "id": 15,
            "name": "FIG Technology Summit Website",
            "date": "20190301T000000-0700",
            "category": "web design",
            "tags": [
                "ui",
                "website",
                "graphic design",
                "angularjs",
                "tailwindcss"
            ],
            "img": "fig-tech-summit-thumb.jpg",
            "starred": false
        }
        ],
        tags: [
            "ui",
            "website",
            "javascript",
            "angularjs",
            "logo",
            "graphic design",
            'mockup',
            "adobe illustrator",
            "adobe photoshop",
            "tailwindcss",
            'illustration'
        ],
        categories: [{
            name: 'graphic design',
            icon: 'fig-geometry',
            tags: []
        },
        {
            name: 'illustration',
            icon: 'fig-sketch',
            tags: []
        },
        {
            name: 'web design',
            icon: 'fig-code-window',
            tags: []
        }
        ],
    });
})(window.app);