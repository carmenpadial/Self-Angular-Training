angular.module("isolateScope", [])
    .controller("appCtrl", function ($scope) {
        $scope.callHome = function (message) {
            alert(message);
        }

    })
    .directive("phone", function () {
        return {
            scope: {
                dial: '&'
            },
            controller: function($scope) {
              $scope.msg = 'Hello!!'
            },
            template: '<input type="text" ng-model="msg"/> <div class="button" ng-click="dial({message:msg})">Call me!!</div>'
        }
    })
