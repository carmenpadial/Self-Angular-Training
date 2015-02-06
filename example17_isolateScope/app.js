angular.module("ngApp", [])
    .controller("appCtrl", function($scope) {
        $scope.callHome = function() {
            alert("call home!!");
        }

})