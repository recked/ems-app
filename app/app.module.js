(function () {
    'use strict';

    var app = angular.module('emsApp', []);

    app.controller('teamList', function ($scope, $http) {

        //$scope.list = 'test';
        /*var req = {
            method: 'GET',
            url: 'https://www.bungie.net/platform/Group/289784/MembersV3/?currentPage=1&itemsPerPage=50',
            headers: {
                'X-API-Key': '1bb92ab568d446da9d90af616d961472',
                'Host': 'www.bungie.net',
                'Connection': 'keep-alive'
            },
            data: { test: 'test' },
        }

        $http(req).success(function(data){
            $scope.data = data.Response;
        }).error(function(data, status){
            $scope.status = status;
            console.log($scope.status);
        });*/

        $http.get('https://www.bungie.net/platform/Group/289784/MembersV3/?currentPage=1&itemsPerPage=50').
        success(function (data) {
            $scope.data = data.Response;
        }).
        error(function (data, status) {
            $scope.status = status;
        });

    });

})();