angular.module("ngApp", [])
    .factory("contacts", function() {
        return [
            {"firstName": "Angelica", "lastName": "Britt", "phone": "513-0955"},
            {"firstName": "Amery", "lastName": "Compton", "phone": "1-417-395-4214"},
            {"firstName": "Wendy", "lastName": "Morrow", "phone": "294-8234"},
            {"firstName": "Mercedes", "lastName": "Merrill", "phone": "1-206-670-0109"},
            {"firstName": "Porter", "lastName": "Anderson", "phone": "817-4745"},
            {"firstName": "Leah", "lastName": "Melendez", "phone": "406-3746"},
            {"firstName": "Olga", "lastName": "Mcgowan", "phone": "1-567-304-7633"},
        ];
    })

    .controller("appCtrl", function($scope, contacts){
        $scope.contacts = contacts;
        $scope.selectedContact = null;
        $scope.contactCopy = null;

        $scope.selectContact = function(contact) {
            $scope.selectedContact = contact;
            $scope.contactCopy = angular.copy(contact);
        }

        $scope.saveContact = function() {
            $scope.selectedContact.firstName = $scope.contactCopy.firstName;
        }
    });



