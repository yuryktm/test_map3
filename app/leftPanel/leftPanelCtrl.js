(function(){
    "use strict";
    angular.module("sm.leftPanelModule")
        .controller("leftPanelCtrl", leftPanelCtrl);

    function leftPanelCtrl($scope, leafletService, data){

        $scope.data = data;
        $scope.closeLeftPanel = function(){
            //hide left menu
            angular.element('.left-menu').css("display", "inline");
            //hide left panel
            angular.element('.left-panel').css("left", "-496px");
            angular.element(".panel-body-settings").css("display", "none");
            angular.element(".panel-body-info").css("display", "none");
        };

        //обработчик клик по знаку
        /************************************************************************************************************/
        //mode === "mode2" -- режим работы картинок для вкладок добавление
        $scope.imgClick = function(){
            this.mleave = true;

            //убираем задаем серый фон для знако в
            //установка состояние выбран //removeClass
            if(this.sign.checked){
                this.sign.checked = false;
            }
            //установка состояния не выбран //addClass
            else{
                if(this.addPanelImg){//логика работы для вкладке addPanel
                    $scope.data.modelSigns.addPanel.signs.forEach(function(x){
                        x.checked = false;
                    });
                }
                this.sign.checked = true;
            }
        }

        $scope.onMouseLeave = function(){
            if(this.sign.checked){
                this.mleave = true;
            }else{
                this.mleave = false;
            }
        };
        /************************************************************************************************************/
        //leafletService.addMarkers();
    }

})();

