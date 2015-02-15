angular.module("ngApp", [])
    .controller('testCtrl', function($scope) {
        $scope.items = ['A', 'B', 'C']
    });