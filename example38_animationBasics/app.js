angular.module('ngApp', ['ngAnimate'])
    .controller('TestCtrl', function($scope) {
        $scope.toggle = true;
        $scope.toggleContainer = function() {
            debugger;
            $scope.toggle = !$scope.toggle;
        }
    });