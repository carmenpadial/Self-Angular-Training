angular.module('FlightServices', [])
    .factory('User', function() {
        return {
            name: 'Carmen Padial',
            email: 'carmen@gmail.com'
        }
    })

    .factory('travelService', function($q) {
        return {
            getDeparture: function(user) {
                var defer = $q.defer();

                defer.resolve({
                    userID   : user.email,
                    flightID : "UA_343223",
                    date     : "01/14/2014 8:00 AM"
                });

                return defer.promise;
            },
            getFlight: function(flightID) {
                var defer = $q.defer();

                defer.resolve({
                    id    : flightID,
                    pilot : "Captain Morgan",
                    plane : {
                        make  : "Boeing 747 RC",
                        model : "TA-889"
                    },
                    status: "onTime"
                });

                return defer.promise;
            }
        }
    })

    .factory('weatherService', function($q) {
        return {
            getForecast: function(date) {
                var defer = $q.defer();
                defer.resolve({
                    date     : date,
                    forecast : "rain"
                });
                return defer.promise;
            }
        }
    });