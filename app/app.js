(function(){
    "use strict";
    angular.module("site-map-app",
        [
            "sm.leafletModule",
            "sm.leftPanelModule",
            "sm.menuModule"])
        .value("data", createData())
        .config(appConfig);

    function createData(){

        var result = {};
        result.panelInfoShow = false;
        result.panelSettingsShow = false;
        result.routeDate = {
                mileage : 375, //Пробег
                travelTime : "4 : 35",  //Время в пути
                consumptionOfFuel : 78, //Расход по топливу
                tollRoads : 3  //Платные дороги
        },
        result.modelSigns = {
            showPanel: {//Отображение вкладка
                signs: [ //Знаки
                    { name : "3_4", checked : false, imgName: "3_4.svg"},
                    { name : "3_11", checked : false, imgName: "3_11.svg"},
                    { name : "3_12", checked : false, imgName: "3_12.svg"},
                    { name : "3_13", checked : false, imgName: "3_13.svg"},
                    { name : "3_14", checked : false, imgName: "3_14.svg"},
                    { name : "3_15", checked : false, imgName: "3_15.svg"},
                    { name : "3_32", checked : false, imgName: "3_32.svg"},
                    { name : "3_33", checked : false, imgName: "3_33.svg"},
                    //знаки дорог
                    { name : "s5_1", checked : false, imgName: "5_1.svg"},
                    { name : "s7_11", checked : false, imgName: "7_11.gif"},
                    { name : "s7_12", checked : false, imgName: "7_12.gif"}
                ]
            },
            confPanel: {//Конфигурирование
                signs: [
                    { name : "c3_4", value: 0, checked : false, showValue: false, imgName: "3_4.svg"},
                    { name : "c3_11", value: 7, checked : false, showValue: true, imgName: "3_11.svg"},
                    { name : "c3_12", value: 6, checked : false, showValue: true, imgName: "3_12.svg"},
                    { name : "c3_13", value: 4.5, checked : false, showValue: true, imgName: "3_13.svg"},
                    { name : "c3_14", value: 2.7, checked : false, showValue: true, imgName: "3_14.svg"},
                    { name : "c3_15", value: 10, checked : false, showValue: true, imgName: "3_15.svg"},
                    { name : "c3_32", value: 0, checked : false, showValue: false, imgName: "3_32.svg"},
                    { name : "c3_33", value: 0, checked : false, showValue: false, imgName: "3_33.svg"},
                ]
            },
            addPanel:{
                signs: [//Добавление
                    { name : "a3_4", value: 0, checked : false, showValue: false, imgName: "3_4.svg"},
                    { name : "a3_11", value: 7, checked : false, showValue: true, imgName: "3_11.svg"},
                    { name : "a3_12", value: 6, checked : false, showValue: true, imgName: "3_12.svg"},
                    { name : "a3_13", value: 4.5, checked : false, showValue: true, imgName: "3_13.svg"},
                    { name : "a3_14", value: 2.7, checked : false, showValue: true, imgName: "3_14.svg"},
                    { name : "a3_15", value: 10, checked : false, showValue: true, imgName: "3_15.svg"},
                    { name : "a3_32", value: 0, checked : false, showValue: false, imgName: "3_32.svg"},
                    { name : "a3_33", value: 0, checked : false, showValue: false, imgName: "3_33.svg"},
                ]
            }
        };

        return result;
    }

    function appConfig(){
        angular.element("div leaflet").css('width', window.innerWidth + "px").css('height', window.innerHeight + "px");
    }

})();


