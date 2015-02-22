angular.module('ngApp', [])
    .controller("AppCtrl", function($scope, $interval){
        var timer = $interval(function(){
            console.log("hago algo");
        }, 100, 10);

        function success() {
            console.log("success");
        };

        function error() {
            console.log("error");
        };

        function notify() {
            console.log("notify")
        };

        $scope.cancel = function() {
            $interval.cancel(timer);
        }

        timer.then(success, error, notify);
    });