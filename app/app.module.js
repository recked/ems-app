(function () {
    'use strict';

    var app = angular.module('emsApp', []);

    app.service('destinyGroup', function ($http) {
        var teamURL = 'https://www.bungie.net/platform/Group/289784/MembersV3/?currentPage=1&itemsPerPage=50';
        return {
            fetchTeam: function () {
              return $http.get(teamURL);
            }
        };
    });

    app.service('memberLookup', function ($http, id) {
        var memberLookupURL = 'http://www.bungie.net/Platform/User/GetBungieNetUserById/';
        return {
            findUser: function () {
              return $http.get(memberLookupURL + id);
            }
        };
    });

    app.controller('teamList', function ($scope, destinyGroup) {

        destinyGroup.fetchTeam().success(function (team) {
            $scope.team = team.Response;
            //console.log($scope.team.results);
        });

    });

 
})();