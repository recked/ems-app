(function () {
    'use strict';

    var app = angular.module('emsApp', []);

    app.controller('teamList', function ($scope, $http) {

        //$scope.list = 'test';

        $http.get('https://www.bungie.net/platform/Group/289784/MembersV3/?currentPage=1&itemsPerPage=50').
        success(function (data) {
            $scope.data = data.Response;
        }).
        error(function (data, status) {
            $scope.status = status;
        });

    });

})();