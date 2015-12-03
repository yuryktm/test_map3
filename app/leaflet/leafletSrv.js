(function(){
    "use strict";
    angular.module("sm.leafletModule")
        .service("leafletService",leafletService)

    function leafletService(dataProviderService){

        //данные для карты
        this.data =
        {
            center: {
                lat: 59.930088,
                lng: 30.325166,
                zoom: 12
            },
            defaults: {
                tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                zoomControl: false
            },
            markers: {},
            paths: {}
        };

        var markers =  this.data.markers;
        var paths = this.data.paths;

        this.addMarkers = function(){
            dataProviderService.dataProvider.getData(function(name) {
                markers.marker1 = {
                    lat: 59.9,
                    lng: 30.3,
                    message: name,
                    // focus: true,
                    draggable: false
                };
            });



        };
    }
})();

