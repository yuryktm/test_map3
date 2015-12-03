(function(){
    "use strict";
    angular.module("sm.leftPanelModule")
        .controller("leftPanelCtrl", leftPanelCtrl);

    function leftPanelCtrl($scope, leafletService, data){

        $scope.panelInfoShow = data.panelInfoShow;
        $scope.panelSettingsShow = data.panelSettingsShow;
        $scope.data = data.data;

        //leafletService.addMarkers();
    }

})();

