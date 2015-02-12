angular.module('ngApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'AppCtrl',
                templateUrl:'partial.html',
                resolve: {
                    app : function($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function(){
                            defer.resolve(); // si no resuelvo la promesa nunca llegara a inicializarse el controller
                        }, 2000);
                        return defer.promise;
                    }
                }
            }
        )
    })
    .controller('AppCtrl', function($scope) {
        $scope.data = 'I am a great app!!';
    })