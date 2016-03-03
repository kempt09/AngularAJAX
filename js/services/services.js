var app = angular.module('myApp');

app.factory('currentService', ['$http', function($http){

    'use strict';



    var zippy = [];


    var location = function(word){

        return zippy.push(word);

    };

    return {

        getWeather : function(){
                return $http.get('http://api.openweathermap.org/data/2.5/weather?zip='+zippy[0]+'&APPID=905ac86cc6f930c970c6427189d09a5b');
            },
        location: location

    };

    //return $http({
    //    method:'GET',
    //    url:'http://api.openweathermap.org/data/2.5/weather?zip=48073&APPID=905ac86cc6f930c970c6427189d09a5b'
    //});




}]);


