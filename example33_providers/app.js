var app = angular.module('ngApp', []);

// Opcion 1 - declarar un provider y despues configurarlo en la fase de config
app.provider("game", function() {
    var type;
    return {
        setType: function(value) {
          type = value;
        },
        $get: function(){
            return {
                title: type + 'Craft'
            }
        }
    }
});

app.config(function(gameProvider) {
    gameProvider.setType('Star');
})


// Opcion 2 - Short-hand de un provider. Es menos configurable
//app.factory("game", function() {
//    return {
//        title : "War"
//    };
//});


// common code
app.controller("AppCtrl", function($scope, game) {
    $scope.title = game.title;
});

