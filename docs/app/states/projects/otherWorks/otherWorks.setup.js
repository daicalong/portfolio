(function(app, ng) {
    app.component('otherWorks', {
        templateUrl: '/app/states/projects/otherWorks/otherWorks.template.html',
        controller: otherWorksController
    });

    app.controller('otherWorksController', otherWorksController);

    otherWorksController.$inject = ['projectListFactory'];

    function otherWorksController(projectListFactory, projectListValue, filterFilter) {
        let $ctrl = this;

        $ctrl.options = [
            {
                name: 'Option 1',
                value: 1
            },
            {
                name: 'Option 2',
                value: 2
            },
            {
                name: 'Option 3',
                value: 3
            },
            {
                name: 'Option 4',
                value: 4
            },
            {
                name: 'Option 5',
                value: 5
            }
        ];

        $ctrl.imgSrc = 'https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';

        $ctrl.showAlert = () => {
            let mssg = 'You clicked a button.';
            return alert(mssg);
        };

        $ctrl.$onInit = () => {
            $ctrl.selectedOption = {
                name: 'Option 1',
                value: 1
            };
        };
    }
})(window.app, window.angular);