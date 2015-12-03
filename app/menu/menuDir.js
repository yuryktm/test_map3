(function(){
    "use strict";
    angular
        .module("sm.menuModule")
        .directive("dirMenu", dirLeftPanel); //dir-menu

    function dirLeftPanel(){
        return {
            restrict: "A",
            templateUrl:"menu/menuView.html"
        }
    }

})();

