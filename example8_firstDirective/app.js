angular.module("superHero", [])
    .directive("superman", function(){
        return {
            restrict: 'E',
            template: "<div>Here I am to save the day</div>"
        }
    });