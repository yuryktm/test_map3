(function(){
    "use strict";
    angular.module("sm.menuModule")
        .controller("menuCtrl", menuCtrl);

    function menuCtrl($scope, data){

        function panelOpen(type){
            //hide left menu
            angular.element('.left-menu').css("display", "none");
            //show left panel
            angular.element('.left-panel').css("left", "0px");
            angular.element(type).css("display", "inline");
        };

        $scope.openLeftMenuInfo = function(){
            panelOpen(".panel-body-info");
            data.panelInfoShow = true;
            data.panelSettingsShow = false;
        };

        $scope.openLeftMenuSettings = function(){
            panelOpen(".panel-body-settings");
            data.panelInfoShow = false;
            data.panelSettingsShow = true;
        };

        $scope.clickPointBtn = function(){
            console.log("click point btn");
        }
    }

})();
