angular.module("isolateScope", [])
    .controller("tasksCtrl", function($scope) {
        $scope.logChore = function(chore) {
            console.log(chore + " is done!");
        }
    })
    .directive("kid", function() {
        return {
            restrict:'E',
            scope: {
                done:'&' //this "done" is really mapped to whatever you passed into this "done" attribute.
            },
            template:'<input type="text" ng-model="chore"/>' + '{{chore}}' +
                '<div class="button" ng-click="done({chore:chore})"> Button </div>'
        }
    });