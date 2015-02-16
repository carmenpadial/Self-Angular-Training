angular.module("ngApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl:'templates/home.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListCtrl'
            })
            .state('list.item', {
                url: '/:item',
                templateUrl:'templates/list.item.html',
                controller: function($scope, $stateParams) {
                    $scope.name = $stateParams.item;
                }
            })

        $urlRouterProvider.otherwise('/home');
    })

    .controller('ListCtrl', function($scope) {
        $scope.items = [
            {name: 'Milk'},
            {name: 'Eggs'},
            {name: 'Bread'},
            {name: 'Cheese'},
            {name: 'Ham'}
        ];
    })