var app = angular.module('ngApp', []);
    app.directive("country", function() {
        return {
            restrict:'E',
            controller: function() {
                this.testCountry = function(state) {
                    console.log("state: " + state);
                }
            }
        }
    })

    app.directive("state", function() {
        return {
            restrict: 'E',
            require: '^country',    // si no pongo el angulito no me encuentra la directiva country de la que depende
            controller: function() {
                this.testState = function(city) {
                    console.log("city: " + city);
                }
            },
            link: function(scope, element, attrs, countryCtrl) {
                countryCtrl.testCountry("New York");
            }
        }
    })

    app.directive("city", function() {
        return {
            restrict:'E',
            require: '^state',
            link:function(scope, element, attrs, stateCtrl) {
                stateCtrl.testState("Manhattan");
            }

        }
    })