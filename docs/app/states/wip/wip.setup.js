app.component("wip",
    {
        templateUrl: '/app/states/wip/wip.template.html',
        controller: wipController
    });

function wipController(wpFactory) {
    var $ctrl = this;

    $ctrl.$onInit = () => {
        wpFactory.getPosts(1).then((response) => {
            $ctrl.posts = response;

            response.forEach((el) => {
                console.log(el);
            });
        });
    };
}

app.controller('wipController', wipController);