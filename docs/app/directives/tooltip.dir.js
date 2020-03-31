(function (app, ng) {
    app.directive('htmTooltip', $compile =>{
        return {
            restrict: 'A',
            scope: {
                title:'@',
                fixedPosition: '=',
                titleClass: '@'
            },
            link: ($scope, element, attr) => {

                $scope.createTooltip = $event => {
                    if(attr.title || attr.htmTooltip) {

                        $scope.tooltipElement = ng.element('<span>').addClass('bg-black-75 rounded px-8 py-4 m-4').addClass($scope.titleClass);
                        
                        ng.element.find('body').append($scope.tooltip);   
                        
                        $scope.updateTooltip(attrs.title || attrs.htmlTooltip);
                    }
                };

                $scope.updateTooltip = title => {

                  $scope.tooltipElement.html(title);  

                  $compile($scope.tooltipElement.contents())($scope);
                };
            }
        }
    });
  })(window.app, window,angular);