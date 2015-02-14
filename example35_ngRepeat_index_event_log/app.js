var app = angular.module("ngApp", [])
    app.controller("AppCtrl", function($scope, $rootScope, $log){
        $scope.items =
                [{name: 'John', phone: '555-1276'},
                {name: 'Mary', phone: '800-BIG-MARY'},
                {name: 'Mike', phone: '555-4321'},
                {name: 'Adam', phone: '555-5678'},
                {name: 'Julie', phone: '555-8765'},
                {name: 'Juliette', phone: '555-5678'}];

        $scope.myFunc = function(event) {
            $log.debug(event);
        }
    });

    app.run(function($rootScope, $log) { // de esta forma el log es accedida desde cualquier sitio
        $rootScope.log = $log;
    });

    app.config(function($logProvider) {
        $logProvider.debugEnabled(false); //Deshabilita el log en modo debug
    })