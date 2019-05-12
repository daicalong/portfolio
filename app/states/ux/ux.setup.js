app.component("ux",
    {
        templateUrl: '/states/ux/ux.template.html',
        controller: uxController
    });

function uxController() {
    let $ctrl = this;

    $ctrl.uxArray = [
        {'name': 'Work 1'},
        {'name': 'Work 2'},
    ]

}

app.controller('uxController', uxController);
