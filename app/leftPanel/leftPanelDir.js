(function(){
    "use strict";
    angular
        .module("sm.leftPanelModule")
        .directive("dirLeftPanel", dirLeftPanel); //dir-left-panel

    function dirLeftPanel(){
        return {
            restrict: "A",
            templateUrl:"leftPanel/leftPanelView.html"
        }
    }
})();
