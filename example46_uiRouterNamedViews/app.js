angular.module('ngApp', ['ui.router', 'altOne', 'altTwo', 'altThree'])
    .config(function($stateProvider) {
        $stateProvider.state('app', {
            url:'/',
            views: {
                'header': {
                    templateUrl: 'common/header.tpl.html'
                },
                'sideBar': {
                    templateUrl: 'common/sideBar.tpl.html'
                },
                'content': {
                    templateUrl: 'common/content.tpl.html'
                },
                'footer': {
                    templateUrl: 'common/footer.tpl.html'
                }
            }
        });
    });


angular.module('altOne', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('app.alt-one', {
            url:'alt-one',
            views: {
                'content@': {
                    templateUrl: 'alt-one/alt-one.content.tpl.html'
                }
            }
        })
    });


angular.module('altTwo', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state('app.alt-two', {
            url: 'alt-two',
            views: {
                'content@': { templateUrl: 'alt-two/alt-two.content.tpl.html' },
                'header@': { templateUrl: 'alt-two/alt-two.header.tpl.html' }
            }
        });
    }
);

angular.module('altThree', ['ui.router', 'blink'])
    .config(function ($stateProvider) {
        $stateProvider.state('app.alt-three', {
            url: 'alt-three',
            views: {
                'content@': { templateUrl: 'alt-three/alt-three.content.tpl.html' },
                'header@': { templateUrl: 'alt-three/alt-three.header.tpl.html' },
                'one@app.alt-three': { template: '<div class="alert-info">Sub One</div>' },
                'two@app.alt-three': { template: '<div class="alert-success">Sub Two</div>' }
            }
        });
    }
);


angular.module('blink', []).directive('blink', [
    '$timeout',
    function ($timeout) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: [
                '$scope',
                '$element',
                function ($scope, $element) {
                    function showElement() {
                        $element.css('opacity', '1.0');
                        $timeout(hideElement, 400);
                    }
                    function hideElement() {
                        $element.css('opacity', '0.0');
                        $timeout(showElement, 400);
                    }
                    showElement();
                }
            ],
            template: '<span ng-transclude></span>',
            replace: true
        };
    }
]);