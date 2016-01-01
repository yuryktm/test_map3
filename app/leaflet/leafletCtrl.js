(function(){
    "use strict";
    angular.module("sm.leafletModule")
        .controller("leafletCtrl", leafletCtrl);

    function leafletCtrl($scope, leafletService){

        $scope.data = leafletService.data;

    }

})();
