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

        //���������� ���� �� �����
        /************************************************************************************************************/
        //mode === "mode2" -- ����� ������ �������� ��� ������� ����������
        $scope.imgClick = function(){
            this.mleave = true;

            //������� ������ ����� ��� ��� ����� �
            //��������� ��������� ������ //removeClass
            if(this.sign.checked){
                this.sign.checked = false;

                unCheckedSign(this)
            }
            //��������� ��������� �� ������ //addClass
            else{
                if(this.addPanelImg){//������ ������ ��� ������� addPanel
                    $scope.data.modelSigns.addPanel.signs.forEach(function(x){
                        x.checked = false;
                    });
                }
                this.sign.checked = true;

                checkedSign(this);
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

        function checkedSign(element){
            if(element.showPanelImg){
                //��������� ����� �� �����
                leafletService.addMarkers(element.sign.signType);
            }
        }

        function unCheckedSign(element){
            if(element.showPanelImg){
            //������� ����� � �����
            leafletService.removeMarkers(element.sign.signType);
            }
        }
    }

})();

