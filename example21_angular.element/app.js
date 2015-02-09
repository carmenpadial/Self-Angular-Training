angular.module("angularElement", [])
    .directive("dumbPassword", function() {
        var displayElement = angular.element('<div>{{value}}</div>');
        var link = function(scope) {
            scope.$watch("value", function(newValue) {
                if(newValue === "Password") {
                    displayElement.toggleClass('alert-box alert');
                }
            })
        };
        return {
            restrict:'E',
            replace:true,
            template:'<div>' +
                        '<input type="text" ng-model="value"/>' +
                     '</div>',
            compile: function(tmpl) {
                tmpl.append(displayElement);
                return link;
            }
        }
    });