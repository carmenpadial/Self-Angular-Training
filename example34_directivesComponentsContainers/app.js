angular.module("ngApp", [])
    .directive("clock", function() {
        return{
            restrict:'E',
            scope:{
                timezone:"@"
            },
            template: '<div>12:00 {{timezone}}</div>'
        }
    })
    .directive("panel", function() {
        return {
            restrict:'E',
            scope: {
                title: "@"
            },
            transclude:true,
            template:'<div style="border: 3px solid #000000">' +
                    '<div class="alert-box">{{title}}</div>'+
                    '<div ng-transclude></div>'+
                '</div>'
        }
    })

