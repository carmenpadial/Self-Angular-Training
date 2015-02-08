angular.module("isolateScope", [])
    .controller("appCtrl", function($scope) {
        $scope.leaveVoiceMail = function(number, message) {
            alert("Number " + number + " said " + message);
        }
    })
    .directive("phone", function() {
        return {
            restrict:"E",
            scope: {
                number:"@",
                network:"=",
                makeCall:"&"
            },
            template:'<div class="panel">Number: {{number}}' +
                     '<select ng-model="network"><option value="0">Sprint</option><option value="1">AT&T</option></select>' +
                     '<input type="text" ng-model="msg"/>' +
                     '<div class="button" ng-click="makeCall({number:number, message:msg})">Call!</div>' +
                     '</div>'
        }
    })