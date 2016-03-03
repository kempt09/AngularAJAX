var app = angular.module('myApp', ['ngRoute']);

app.controller('currentForcast', ['$scope', 'currentService', function($scope, currentService){

    'use strict';

    currentService.getWeather().then(function (response) {

        $scope.city = response.data.name;
        $scope.temperature = response.data.main.temp;
        $scope.minTemp = response.data.main.temp_min;
        $scope.maxTemp = response.data.main.temp_max;
        $scope.humidity = response.data.main.humidity;

    });

}]);

app.controller('access', ['$scope','currentService', '$location', function($scope,currentService, $location){

    'use strict';

    $scope.zipCode = '';

    $scope.getZip = function(){

        var zip = [$scope.zipCode];

        zip.forEach(function(code){

            currentService.location(code);

        });

        $location.path('/current');

    };

}]);

